//
import { subscriptionplanServices } from "./subscriptionplan.service";
import sendResponse from "../../../shared/sendResponse";
import catchAsync from "../../../shared/catchAsync";

const createSubscriptionplan = catchAsync(async (req, res) => {
  await subscriptionplanServices.createSubscriptionplanIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "The subscriptionplan has been created successfully",
  });
});

const getAllSubscriptionplans = catchAsync(async (req, res) => {
  const result = await subscriptionplanServices.getAllSubscriptionplanFromDB();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "All subscriptionplans have been retrieved successfully",
    data: result,
  });
});

const getSubscriptionplanById = catchAsync(async (req, res) => {
  const result = await subscriptionplanServices.getSubscriptionplanByIdFromDB(
    req.params.id,
  );
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "subscriptionplan has been retrieved successfully",
    data: result,
  });
});

const updateSubscriptionplan = catchAsync(async (req, res) => {
  const updatedPlan =
    await subscriptionplanServices.updateSubscriptionplanIntoDB(
      req.params.id,
      req.body,
    );
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "subscriptionplan has been updated successfully",
    data: updatedPlan,
  });
});

const deleteSubscriptionplan = catchAsync(async (req, res) => {
  await subscriptionplanServices.deleteSubscriptionplanFromDB(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "subscriptionplan has been deleted successfully",
  });
});

export const subscriptionplanControllers = {
  createSubscriptionplan,
  getAllSubscriptionplans,
  getSubscriptionplanById,
  updateSubscriptionplan,
  deleteSubscriptionplan,
};

