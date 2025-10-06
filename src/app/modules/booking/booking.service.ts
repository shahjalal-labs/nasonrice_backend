//
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";
import { getOrCreateAddMoneyCustomer } from "../payment/getOrCreateStripeCustomer";
import { processAddMoneyPayment } from "../payment/processAddMoneyPayment";

const createBookingIntoDB = async (payload: any, userId: string) => {
  // 1️⃣ Fetch product outside transaction
  const product = await prisma.product.findUnique({
    where: { id: payload.productId },
  });
  if (!product) throw new ApiError(404, "Product not found");

  if (product.inStock < payload.quantity) {
    throw new ApiError(
      400,
      `Product is out of stock. Only ${product.inStock} item(s) available.`,
    );
  }

  // 2️⃣ Handle Stripe outside transaction
  const customerId = await getOrCreateAddMoneyCustomer(
    userId,
    payload.paymentMethodId,
  );

  const { paymentIntent, paymentId } = await processAddMoneyPayment({
    amount: product.price * payload.quantity,
    userId,
    customerId,
    paymentMethodId: payload.paymentMethodId,
  });

  if (paymentIntent.status !== "succeeded") {
    throw new ApiError(500, "Payment failed or requires action");
  }

  // 3️⃣ Run DB updates inside transaction
  return await prisma.$transaction(async (tx) => {
    const booking = await tx.productBooking.create({
      data: {
        // ...payload,
        productId: payload?.productId as string,
        quantity: Number(payload?.quantity),
        // paymentId: "paid",
        paymentId,
        totalPrice: product.price * payload.quantity,
        userId,
      },
    });

    await tx.product.update({
      where: { id: payload.productId },
      data: {
        inStock: { decrement: payload.quantity },
      },
    });

    return booking;
  });
};

const getAllBookingsFromDB = async () => {
  const result = await prisma.productBooking.findMany({
    omit: {
      createdAt: true,
      updatedAt: true,
    },
    include: {
      user: {
        select: {
          firstName: true,
          lastName: true,
          email: true,
        },
      },
      product: {
        select: {
          name: true,
          price: true,
        },
      },
    },
  });
  return result;
};

export const BookingService = {
  createBookingIntoDB,
  getAllBookingsFromDB,
};
