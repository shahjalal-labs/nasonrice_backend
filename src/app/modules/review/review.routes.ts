import express from "express";
import { reviewControllers } from "./review.controller";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { ReviewSchemaValidation } from "./review.validation";

const router = express.Router();

router.post(
  "/",
  auth(),
  validateRequest(ReviewSchemaValidation.createReviewSchema),
  reviewControllers.createReview,
);

router.get("/", reviewControllers.getAllReviews);
router.get("/:id", reviewControllers.getReviewById);
router.patch("/:id", reviewControllers.updateReview);
router.delete("/:id", reviewControllers.deleteReview);

export const reviewRoutes = router;

