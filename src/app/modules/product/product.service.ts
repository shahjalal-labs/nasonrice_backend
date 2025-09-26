import { Product } from "@prisma/client";
import prisma from "../../../shared/prisma";

//
const createProductIntoDB = async (payload: Product) => {
  const result = await prisma.product.create({
    data: payload,
  });
  return result;
};

export const ProductService = {
  createProductIntoDB,
};
