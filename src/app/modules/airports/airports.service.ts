import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createAirportsIntoDB = async (data: any) => {
  await prisma.airports.create({ data });
  return;
};

const getAllAirportsFromDB = async () => {
  const results = await prisma.airports.findMany();
  return results;
};

const getAirportsByIdFromDB = async (id: string) => {
  const result = await prisma.airports.findUnique({ where: { id } });
  return result;
};

const updateAirportsIntoDB = async (id: string, data: any) => {
  await prisma.airports.update({ where: { id }, data });
  return;
};

const deleteAirportsFromDB = async (id: string) => {
  await prisma.airports.delete({ where: { id } });
  return;
};

export const airportsServices = {
  createAirportsIntoDB,
  getAllAirportsFromDB,
  getAirportsByIdFromDB,
  updateAirportsIntoDB,
  deleteAirportsFromDB,
};
  