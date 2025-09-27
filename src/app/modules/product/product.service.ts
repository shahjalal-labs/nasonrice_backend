import { Product } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";
import httpStatus from "http-status";
import { uploadInSpace } from "../../../helpers/uploadInSpace";
import { Request } from "express";

//w: (start)╭──────────── createProductIntoDB  ────────────╮
const createProductIntoDB = async (
  payload: Product,
  userId: string,
  req: Request,
) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };

  const processImages = async (
    files: Express.Multer.File[],

    folder: string,
  ) => {
    if (!files || files.length === 0) return null;

    return Promise.all(
      files.map((file) => uploadInSpace(file, `brand/class/${folder}`)),
    );
  };

  const [productUrls] = await Promise.all([
    processImages(files?.productUrls, "productUrls"),
  ]);

  if (!productUrls) {
    throw new ApiError(404, "Product images are required");
  }

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
      images: productUrls,
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
const updateProductIntoDB = async (
  payload: any,
  productId: string,
  req: Request,
) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };

  const processImages = async (
    files: Express.Multer.File[],

    folder: string,
  ) => {
    if (!files || files.length === 0) return null;

    return Promise.all(
      files.map((file) => uploadInSpace(file, `brand/class/${folder}`)),
    );
  };

  const [productUrls] = await Promise.all([
    processImages(files?.productUrls, "productUrls"),
  ]);

  /*   if (!productUrls) {
    throw new ApiError(404, "Product images are required");
  } */

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
    data: {
      ...payload,
      ...(productUrls?.length ? { images: productUrls } : {}),
    },
  });
  return result;
};
//
//w: (end) ╰──────────── updateProductIntoDB   ────────────╯

//w: (start)╭──────────── prduct details/getProductById  ────────────╮

const getProductByIdFromDB = async (productId: string) => {
  const result = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    omit: {
      createdAt: true,
      updatedAt: true,
    },
    include: {
      user: {
        select: {
          firstName: true,
          email: true,
        },
      },
    },
  });
  return result;
};
//w: (end) ╰──────────── prduct details/getProductById   ────────────╯

//w: (start)╭──────────── prduct details/getProductById  ────────────╮

//w: (end) ╰──────────── prduct details/getProductById   ────────────╯

export const ProductService = {
  createProductIntoDB,
  getAllProductsFromDB,
  deleteProductFromDB,
  updateProductIntoDB,
  getProductByIdFromDB,
};
