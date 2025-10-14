import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { subscriptionplanServices } from "./subscriptionplan.service";

const createSubscriptionPlan = catchAsync(async (req, res) => {
  const result = await subscriptionplanServices.createSubscriptionPlanIntoDB(
    req.body,
  );

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Subscription created successfully",
    data: result,
  });
});

// Add other controller methods as needed
const getAllSubscriptionplans = catchAsync(async (req, res) => {
  const result = await subscriptionplanServices.getAllSubscriptionplanFromDB();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Subscription plans retrieved successfully",
    data: result,
  });
});

const getSubscriptionplanById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await subscriptionplanServices.getSubscriptionplanByIdFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Subscription plan retrieved successfully",
    data: result,
  });
});

const deleteSubscriptionplan = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    await subscriptionplanServices.deleteSubscriptionplanFromDB(id);

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Subscription plan deleted successfully",
      data: null,
    });
  },
);

const createSubscription = catchAsync(async (req, res) => {
  const priceId = req.params.priceId as string;
  const paymentMethodId = req.body.paymentMethodId as string;
  // const customerId = req.body.customerId as string;
  const userId = req.user.id as string;
  const result = await subscriptionplanServices.createSubscriptionIntoDB(
    priceId,
    paymentMethodId,
    userId,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Subscription created successfully",
    data: result,
  });
});

const updateSubscriptionStatus = catchAsync(async (req, res) => {
  const { id: userId } = req.user;
  const { priceId, status } = req.body;

  const result = await subscriptionplanServices.updateSubscriptionStatusIntoDB(
    userId,
    priceId,
    status,
  );
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Subscription status updated successfully",
    data: result,
  });
});

export const subscriptionplanController = {
  createSubscriptionPlan,
  getAllSubscriptionplans,
  getSubscriptionplanById,
  deleteSubscriptionplan,
  createSubscription,
  updateSubscriptionStatus,
};
