import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { subscriptionplanServices } from "./subscriptionplan.service";

const createSubscriptionPlan = catchAsync(
  async (req: Request, res: Response) => {
    const result = await subscriptionplanServices.createSubscriptionPlanIntoDB(
      req.body,
    );

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Subscription created successfully",
      data: result,
    });
  },
);

// Add other controller methods as needed
const getAllSubscriptionplans = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await subscriptionplanServices.getAllSubscriptionplanFromDB();

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Subscription plans retrieved successfully",
      data: result,
    });
  },
);

const getSubscriptionplanById = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result =
      await subscriptionplanServices.getSubscriptionplanByIdFromDB(id);

    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Subscription plan retrieved successfully",
      data: result,
    });
  },
);

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

export const subscriptionplanController = {
  createSubscriptionPlan,
  getAllSubscriptionplans,
  getSubscriptionplanById,
  deleteSubscriptionplan,
};
