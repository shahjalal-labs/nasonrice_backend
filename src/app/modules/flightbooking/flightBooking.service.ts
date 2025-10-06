//
import { FlightBooking, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createFlightBookingIntoDB = async (data: FlightBooking) => {
  await prisma.flightBooking.create({ data });
  return;
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

const priceDeterminant = async (from: string, to: string) => {};
export const flightBookingServices = {
  createFlightBookingIntoDB,
  getAllFlightBookingFromDB,
  getFlightBookingByIdFromDB,
  updateFlightBookingIntoDB,
  deleteFlightBookingFromDB,
};
