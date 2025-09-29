//
import { Booking } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createBookingIntoDB = async (payload: Booking) => {
  const result = await prisma.booking.create({
    data: {
      ...payload,
    },
  });
  return result;
};

export const BookingService = {
  createBookingIntoDB,
};
