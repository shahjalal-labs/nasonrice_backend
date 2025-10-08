import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createReviewIntoDB = async (data: any) => {
  await prisma.review.create({ data });
  return;
};

const getAllReviewFromDB = async () => {
  const results = await prisma.review.findMany();
  return results;
};

const getReviewByIdFromDB = async (id: string) => {
  const result = await prisma.review.findUnique({ where: { id } });
  return result;
};

const updateReviewIntoDB = async (id: string, data: any) => {
  await prisma.review.update({ where: { id }, data });
  return;
};

const deleteReviewFromDB = async (id: string) => {
  await prisma.review.delete({ where: { id } });
  return;
};

export const reviewServices = {
  createReviewIntoDB,
  getAllReviewFromDB,
  getReviewByIdFromDB,
  updateReviewIntoDB,
  deleteReviewFromDB,
};
  