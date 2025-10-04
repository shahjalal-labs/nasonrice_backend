//
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

export const paymentServices = {
  getPaymentDetailsFromDB,
};
