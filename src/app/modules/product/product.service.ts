import { Product } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";

//
const createProductIntoDB = async (payload: Product, userId: string) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!existingUser) {
    throw new ApiError(404, "User not found");
  }
  const result = await prisma.product.create({
    data: payload,
  });
  return result;
};

export const ProductService = {
  createProductIntoDB,
};
