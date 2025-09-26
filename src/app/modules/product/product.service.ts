import { Product } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";

//w: (start)╭──────────── createProductIntoDB  ────────────╮
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
    data: {
      ...payload,
      userId: existingUser.id,
    },
  });
  return result;
};

//w: (end) ╰──────────── createProductIntoDB  ────────────╯

//w: (start)╭──────────── create new user with otp verification ────────────╮

const getAllProductsFromDB = async () => {
  const result = await prisma.product.findMany();
  return result;
};
//w: (end) ╰──────────── create new user with otp verification ────────────╯

export const ProductService = {
  createProductIntoDB,
  getAllProductsFromDB,
};
