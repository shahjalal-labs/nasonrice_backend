import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createCk2 = async (data: any) => {
  await prisma.ck2.create({ data });
  return;
};

const getAllCk2 = async () => {
  const results = await prisma.ck2.findMany();
  return results;
};

const getCk2ById = async (id: string) => {
  const result = await prisma.ck2.findUnique({ where: { id } });
  return result;
};

const updateCk2 = async (id: string, data: any) => {
  await prisma.ck2.update({ where: { id }, data });
  return;
};

const deleteCk2 = async (id: string) => {
  await prisma.ck2.delete({ where: { id } });
  return;
};

export const ck2Services = {
  createCk2,
  getAllCk2,
  getCk2ById,
  updateCk2,
  deleteCk2,
};
  