import express from "express";
import { ProductValidation } from "./product.validation";
import validateRequest from "../../middlewares/validateRequest";
import { ProductController } from "./product.controller";
const router = express.Router();
router.post(
  "/create",
  validateRequest(ProductValidation.createProductValidationSchema),
  ProductController.createProduct,
);
export const ProductRoute = router;
