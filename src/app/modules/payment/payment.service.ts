//

//w: (start)╭──────────── create new user with otp verification ────────────╮

//w: (end) ╰──────────── create new user with otp verification ────────────╯

import ApiError from "../../../errors/ApiErrors";
import prisma from "../../../shared/prisma";

const getPaymentDetailsFromDB = async (paymentId: string) => {
  const result = await prisma.paymentActivity.findUnique({
    where: {
      id: paymentId,
    },
  });
  if (!result) throw new ApiError(404, "Payment not found");
  return result;
};

//w: (start)╭──────────── create new user with otp verification ────────────╮

//w: (end) ╰──────────── create new user with otp verification ────────────╯

const getUserPaymentsHistoryFromDB = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!user) throw new ApiError(404, "User not found");

  const payments = await prisma.paymentActivity.findMany({
    where: {
      userId,
    },
  });

  if (!payments.length) throw new ApiError(404, "No payments found");
  return payments;
};

export const paymentServices = {
  getPaymentDetailsFromDB,
  getUserPaymentsHistoryFromDB,
};
