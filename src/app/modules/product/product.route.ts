//
import express from "express";
import { ProductValidation } from "./product.validation";
import validateRequest from "../../middlewares/validateRequest";
import { ProductController } from "./product.controller";
import auth from "../../middlewares/auth";
const router = express.Router();
router.post(
  "/create",
  auth(),
  validateRequest(ProductValidation.createProductValidationSchema),
  ProductController.createProduct,
);
router.patch(
  "/update",
  auth(),
  validateRequest(ProductValidation.updateProductValidationSchema),
  ProductController.updateProduct,
);
router.get("/", auth("Admin"), ProductController.getAllProducts);
export const ProductRoute = router;
