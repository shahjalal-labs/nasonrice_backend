import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ProductService } from "./product.service";
import { Request, Response } from "express";

//w: (start)╭──────────── createProduct  ────────────╮
const createProduct = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const result = await ProductService.createProductIntoDB(
    req.body,
    userId,
    req,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product created successfully",
    data: result,
  });
});

//w: (end) ╰──────────── createProduct  ────────────╯

//w: (start)╭──────────── getAllProducts  ────────────╮

const getAllProducts = catchAsync(async (req, res) => {
  const result = await ProductService.getAllProductsFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "All products retrieved successfully",
    data: result,
  });
});

export const getAllProductsWithSearchFilter = async (
  req: Request,
  res: Response,
) => {
  try {
    const { petType, category, search } = req.query;

    const filters = {
      petType: petType as "Dog" | "Cat" | "Bird" | undefined,
      category: category as "Food" | "Toy" | "Accessories" | undefined,
      search: search as string | undefined,
    };

    const products =
      await ProductService.getAllProductsFromDBwithSearchFilter(filters);

    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      count: products.length,
      data: products,
    });
  } catch (error: any) {
    console.error("Error fetching products:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};
//w: (end) ╰──────────── getAllProducts  ────────────╯
//
//w: (start)╭──────────── updateProduct   ────────────╮
const updateProduct = catchAsync(async (req, res) => {
  const productId = req.params.id;
  const result = await ProductService.updateProductIntoDB(
    req.body,
    productId,
    req,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product updated successfully",
    data: result,
  });
});

//w: (end) ╰──────────── updateProduct   ────────────╯

//w: (start)╭──────────── createProductIntoDB  ────────────╮

const getProductById = catchAsync(async (req, res) => {
  const { id: productId } = req.params;

  const result = await ProductService.getProductByIdFromDB(productId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product retrieved successfully",
    data: result,
  });
});
//w: (end) ╰──────────── updateProduct   ────────────╯

//w: (start)╭──────────── delete product  ────────────╮

const deleteProduct = catchAsync(async (req, res) => {
  const { id: productId } = req.params;

  await ProductService.deleteProductFromDB(productId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product deleted successfully",
  });
});
//w: (end) ╰──────────── delete product   ────────────╯
export const ProductController = {
  createProduct,
  getAllProducts,
  updateProduct,
  getProductById,
  deleteProduct,
};
