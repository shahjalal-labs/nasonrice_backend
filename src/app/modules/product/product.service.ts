import { Product } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";
import httpStatus from "http-status";

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

//
//w: (start)╭──────────── getAllProductsFromDB ────────────╮

const getAllProductsFromDB = async () => {
  const result = await prisma.product.findMany();
  return result;
};
//w: (end) ╰──────────── getAllProductsFromDB ────────────╯

//
//w: (start)╭──────────── deleteProductFromDB  ────────────╮

const deleteProductFromDB = async (userId: string, productId: string) => {
  const existingProduct = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!existingProduct) {
    throw new ApiError(httpStatus.NOT_FOUND, "Product not found.");
  }
  await prisma.product.delete({
    where: {
      id: productId,
    },
  });
  return;
};
//w: (end) ╰──────────── deleteProductFromDB  ────────────╯

//
//w: (start)╭──────────── updateProductIntoDB   ────────────╮
const updateProductIntoDB = async (payload: any, productId: string) => {
  const existingProduct = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!existingProduct) {
    throw new ApiError(httpStatus.NOT_FOUND, "Product not found.");
  }

  const result = await prisma.product.update({
    where: {
      id: productId,
    },
    data: payload,
  });
  return result;
};
//
//w: (end) ╰──────────── updateProductIntoDB   ────────────╯

export const ProductService = {
  createProductIntoDB,
  getAllProductsFromDB,
  deleteProductFromDB,
  updateProductIntoDB,
};
