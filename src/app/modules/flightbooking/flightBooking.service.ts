//
import { FlightBooking, PrismaClient } from "@prisma/client";
import { getAirportDistance } from "./getDistance";
import { getOrCreateAddMoneyCustomer } from "../payment/getOrCreateStripeCustomer";
import { processAddMoneyPayment } from "../payment/processAddMoneyPayment";
import ApiError from "../../../errors/ApiErrors";
const prisma = new PrismaClient();

const createFlightBookingIntoDB = async (
  data: FlightBooking & { paymentMethodId: string },
  userId: string,
) => {
  const price = await getAirportDistance(data.from, data.to);

  const customerId = await getOrCreateAddMoneyCustomer(userId);

  const { paymentIntent, paymentId } = await processAddMoneyPayment({
    amount: data.price,
    userId,
    customerId,
    paymentMethodId: data.paymentMethodId,
  });

  if (paymentIntent.status !== "succeeded") {
    throw new ApiError(500, "Payment failed or requires action");
  }

  const result = await prisma.flightBooking.create({
    data: {
      ...data,
      paymentId,
      price,
    },
  });
  return result;
};

const getAllFlightBookingFromDB = async () => {
  const results = await prisma.flightBooking.findMany();
  return results;
};




const getFlightBookingByIdFromDB = async (id: string) => {
  const result = await prisma.flightBooking.findUnique({ where: { id } });
  return result;
};

const updateFlightBookingIntoDB = async (id: string, data: any) => {
  await prisma.flightBooking.update({ where: { id }, data });
  return;
};

const deleteFlightBookingFromDB = async (id: string) => {
  await prisma.flightBooking.delete({ where: { id } });
  return;
};

export const flightBookingServices = {
  createFlightBookingIntoDB,
  getAllFlightBookingFromDB,
  getFlightBookingByIdFromDB,
  updateFlightBookingIntoDB,
  deleteFlightBookingFromDB,
};
