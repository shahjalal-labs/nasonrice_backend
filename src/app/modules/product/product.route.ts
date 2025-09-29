//
import express from "express";
import { ProductValidation } from "./product.validation";
import validateRequest from "../../middlewares/validateRequest";
import { ProductController } from "./product.controller";
import auth from "../../middlewares/auth";
import { fileUploader } from "../../../helpers/fileUploader";
import { parseBodyData } from "../../middlewares/parseBodyData";
const router = express.Router();
router.post(
  "/create",
  auth(),
  fileUploader.uploadMultiple,
  parseBodyData,
  validateRequest(ProductValidation.createProductValidationSchema),
  ProductController.createProduct,
);
router.patch(
  "/update/:id",
  auth(),
  fileUploader.uploadMultiple,
  parseBodyData,
  validateRequest(ProductValidation.updateProductValidationSchema),
  ProductController.updateProduct,
);
router.get("/", auth(), ProductController.getAllProducts);
router.get("/:id", auth(), ProductController.getProductById);
router.delete("/:id", auth(), ProductController.deleteProduct);
export const ProductRoute = router;
