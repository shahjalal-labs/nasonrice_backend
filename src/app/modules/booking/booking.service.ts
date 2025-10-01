//
import { Booking } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";

const createBookingIntoDB = async (payload: Booking) => {
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
  return result;
};

const getAllBookingsFromDB = async () => {
  const result = await prisma.booking.findMany();
  return result;
};
export const BookingService = {
  createBookingIntoDB,
  getAllBookingsFromDB,
};
