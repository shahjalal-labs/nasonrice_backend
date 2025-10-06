//
import { FlightBooking, PrismaClient } from "@prisma/client";
import { getAirportDistance } from "./getDistance";
const prisma = new PrismaClient();

const createFlightBookingIntoDB = async (data: FlightBooking) => {
  const price = await getAirportDistance(data.from, data.to);

  const result = await prisma.flightBooking.create({
    data: {
      ...data,
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
