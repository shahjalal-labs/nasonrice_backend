//
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createAirportsIntoDB = async (data: any) => {
  await prisma.airport.create({ data });
  return;
};

const getAllAirportsFromDB = async (search: string | null) => {
  const results = await prisma.airport.findMany({
    where: airportSearchFilter(search),
  });
  return results;
};

const getAirportsByIdFromDB = async (id: string) => {
  const result = await prisma.airport.findUnique({ where: { id } });
  return result;
};

const updateAirportsIntoDB = async (id: string, data: any) => {
  await prisma.airport.update({ where: { id }, data });
  return;
};

const deleteAirportsFromDB = async (id: string) => {
  await prisma.airport.delete({ where: { id } });
  return;
};

export const airportsServices = {
  createAirportsIntoDB,
  getAllAirportsFromDB,
  getAirportsByIdFromDB,
  updateAirportsIntoDB,
  deleteAirportsFromDB,
};
