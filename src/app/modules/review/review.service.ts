import { PrismaClient, Review } from "@prisma/client";
import ApiError from "../../../errors/ApiErrors";
const prisma = new PrismaClient();

const createReviewIntoDB = async (data: Review, reviewerId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: reviewerId,
    },
  });

  if (!user) throw new ApiError(404, "User not found");

  if (!data.productId && !data.flightBookingId)
    throw new ApiError(400, "Missing required fields");

  if (data.productId) {
    const product = await prisma.product.findUnique({
      where: {
        id: data.productId,
      },
    });
    if (!product) throw new ApiError(404, "Product not found");
  }

  await prisma.$transaction(async (tx) => {
    await tx.review.create({
      data: {
        ...data,
        reviewerId,
      },
    });

    if (data.productId) {
      const reviews = await tx.review.findMany({
        where: {
          productId: data.productId,
        },
        select: {
          rating: true,
        },
      });

      const totalReviews = reviews.length;
    }
  });

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
