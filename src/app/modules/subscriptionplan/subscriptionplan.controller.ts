//
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { subscriptionplanServices } from "./subscriptionplan.service";

const createSubscriptionPlan = catchAsync(async (req, res) => {
  const result =
    await subscriptionplanServices.createSubscriptionPlanIntoDB(req);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Subscription created successfully",
    data: result,
  });
});

export const subscriptionplanController = {
  createSubscriptionPlan,
};
