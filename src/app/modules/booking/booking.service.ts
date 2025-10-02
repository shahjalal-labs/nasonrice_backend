//
import { Booking } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";
import { getOrCreateAddMoneyCustomer } from "../payment/getOrCreateStripeCustomer";

/* const createBookingIntoDB = async (payload: Booking) => {
  const product = await prisma.product.findUnique({
    where: {
      id: payload.productId,
    },
  });

  if (!product) throw new ApiError(404, "Product not found");

  if (product.inStock < payload.quantity) {
    throw new ApiError(
      400,
      `Product is out of stock. Only ${product.inStock} item(s) available.`,
    );
  }

  const paid = await prisma.paymentActivity.findUnique({
    where: {
      id: payload.paymentId as string,
    },
  });

  if (!paid) throw new ApiError(404, "Pay first for booking.");

  const result = await prisma.booking.create({
    data: {
      ...payload,
    },
  });
  if (result) {
    await prisma.product.update({
      where: { id: payload.productId },
      data: {
        inStock: {
          decrement: payload.quantity,
        },
      },
    });
  }
  return result;
}; */

const createBookingIntoDB = async (payload: any, userId: string) => {
  return await prisma.$transaction(async (tx) => {
    const product = await tx.product.findUnique({
      where: {
        id: payload.productId,
      },
    });

    if (!product) throw new ApiError(404, "Product not found");

    if (product.inStock < payload.quantity) {
      throw new ApiError(
        400,
        `Product is out of stock. Only ${product.inStock} item(s) available.`,
      );
    }
    getOrCreateAddMoneyCustomer(userId, payload.paymentMethodId);

    const result = await tx.booking.create({
      data: {
        ...payload,
        totalPrice: product.price * payload.quantity,
        userId: userId,
      },
    });

    if (result) {
      await tx.product.update({
        where: { id: payload.productId },
        data: {
          inStock: {
            decrement: payload.quantity,
          },
        },
      });
    }

    return result;
  });
};

const getAllBookingsFromDB = async () => {
  const result = await prisma.booking.findMany({
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
