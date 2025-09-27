import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ProductService } from "./product.service";

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
