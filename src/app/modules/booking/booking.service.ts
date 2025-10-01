//
import { Booking } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";

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

const createBookingIntoDB = async (payload: Booking) => {
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

    const paid = await tx.paymentActivity.findUnique({
      where: {
        id: payload.paymentId as string,
      },
    });

    if (!paid) throw new ApiError(404, "Pay first for booking.");

    const result = await tx.booking.create({
      data: {
        ...payload,
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
  const result = await prisma.booking.findMany();
  return result;
};
export const BookingService = {
  createBookingIntoDB,
  getAllBookingsFromDB,
};
