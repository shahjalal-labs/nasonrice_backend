//

//w: (start)╭──────────── create new user with otp verification ────────────╮

//w: (end) ╰──────────── create new user with otp verification ────────────╯

import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { paymentServices } from "./payment.service";

//w: (start)╭──────────── getPaymentDetails  ────────────╮
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
//w: (end) ╰──────────── getPaymentDetails  ────────────╯

//w: (start)╭──────────── getUserPaymentsHistory  ────────────╮
const getUserPaymentsHistory = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const paymentHistory =
    await paymentServices.getUserPaymentsHistoryFromDB(userId);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Payment details retrived successfully",
    data: paymentHistory,
  });
});
//w: (end) ╰──────────── getUserPaymentsHistory  ────────────╯

export const PaymentControllers = {
  getPaymentDetails,
  getUserPaymentsHistory,
};
