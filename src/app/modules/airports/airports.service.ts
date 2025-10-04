import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createAirports = async (data: any) => {
  await prisma.airports.create({ data });
  return
};

const getAllAirportss = async () => {
  const results = await prisma.airports.findMany();
  return results
};

const getAirportsById = async (id: string) => {
  const result = await prisma.airports.findUnique({ where: { id } });
  return result
};

const updateAirports = async (id: string, data: any) => {
  await prisma.airports.update({ where: { id }, data });
  return
};

const deleteAirports = async (id: string) => {
  await prisma.airports.delete({ where: { id } });
  return
};

export const airportsServices = {
  createAirports,
  getAllAirportss,
  getAirportsById,
  updateAirports,
  deleteAirports,
}
  