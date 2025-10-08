import express from 'express';
import { reviewControllers } from "./review.controller";

const router = express.Router();

router.post('/', reviewControllers.createReview);
router.get('/', reviewControllers.getAllReviews);
router.get('/:id', reviewControllers.getReviewById);
router.patch('/:id', reviewControllers.updateReview);
router.delete('/:id', reviewControllers.deleteReview);

export const reviewRoutes = router;
  