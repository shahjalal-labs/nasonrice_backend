import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ProductService } from "./product.service";

//w: (start)╭──────────── createProduct  ────────────╮
const createProduct = catchAsync(async (req, res) => {
  const { id: userId } = req.user;
  const result = await ProductService.createProductIntoDB(req.body, userId);
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
export const ProductController = {
  createProduct,
  getAllProducts,
};
