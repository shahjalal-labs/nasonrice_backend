import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createFlightBooking = async (data: any) => {
  await prisma.flightBooking.create({ data });
  return;
};

const getAllFlightBookings = async () => {
  const results = await prisma.flightBooking.findMany();
  return results;
};

const getFlightBookingById = async (id: string) => {
  const result = await prisma.flightBooking.findUnique({ where: { id } });
  return result;
};

const updateFlightBooking = async (id: string, data: any) => {
  await prisma.flightBooking.update({ where: { id }, data });
  return;
};

const deleteFlightBooking = async (id: string) => {
  await prisma.flightBooking.delete({ where: { id } });
  return;
};

export const flightBookingServices = {
  createFlightBooking,
  getAllFlightBookings,
  getFlightBookingById,
  updateFlightBooking,
  deleteFlightBooking,
};

