import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createCkIntoDB = async (data: any) => {
  await prisma.ck.create({ data });
  return;
};

const getAllCkFromDB = async () => {
  const results = await prisma.ck.findMany();
  return results;
};

const getCkByIdFromDB = async (id: string) => {
  const result = await prisma.ck.findUnique({ where: { id } });
  return result;
};

const updateCkIntoDB = async (id: string, data: any) => {
  await prisma.ck.update({ where: { id }, data });
  return;
};

const deleteCkFromDB = async (id: string) => {
  await prisma.ck.delete({ where: { id } });
  return;
};

export const ckServices = {
  createCkIntoDB,
  getAllCkFromDB,
  getCkByIdFromDB,
  updateCkIntoDB,
  deleteCkFromDB,
};
  