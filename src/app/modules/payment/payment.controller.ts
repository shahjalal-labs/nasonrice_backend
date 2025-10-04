//
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { paymentServices } from "./payment.service";

const getPaymentDetails = catchAsync(async (req, res) => {
  const paymentId = req.params.id;

  const result = await paymentServices.getPaymentDetailsFromDB(paymentId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Payment details retrived successfully",
    data: result,
  });
});

export const PaymentControllers = {
  getPaymentDetails,
};
