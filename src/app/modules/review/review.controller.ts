import {reviewServices} from './review.service';
import sendResponse from '../../../shared/sendResponse';
import catchAsync from "../../../shared/catchAsync";

const createReview = catchAsync (async (req, res) => {
  await reviewServices.createReviewIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "The review has been created successfully"
  });
});

const getAllReviews = catchAsync(async (req, res) => {
  const result = await reviewServices.getAllReviewFromDB();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "All reviews have been retrieved successfully",
    data: result,
  });
});

const getReviewById = catchAsync(async (req, res) => {
  const result = await reviewServices.getReviewByIdFromDB(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "review has been retrieved successfully",
    data: result,
  });
});

const updateReview = catchAsync(async (req, res) => {
  await reviewServices.updateReviewIntoDB(req.params.id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "review has been updated successfully"
  });
});

const deleteReview = catchAsync(async (req, res) => {
  await reviewServices.deleteReviewFromDB(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "review has been deleted successfully",
  });
});

export const reviewControllers = {
  createReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview,
};
  