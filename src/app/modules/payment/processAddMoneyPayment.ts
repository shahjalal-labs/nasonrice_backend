// src/app/shared/stripeHelper.ts

import stripe from "../../../config/stripe";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";

export const processAddMoneyPayment = async (params: {
  amount: number; // in normal units (not cents)
  userId: string;
  customerId: string;
  paymentMethodId: string;
  description?: string; // optional, defaults below
}) => {
  // ✅ Create & confirm payment intent
  const paymentIntent = await stripe.paymentIntents.create({
    amount: params.amount * 100, // Stripe works in cents
    currency: "usd",
    customer: params.customerId,
    payment_method: params.paymentMethodId,
    confirm: true,
    description:
      params.description ??
      `Add money to platform account. User: ${params.userId}`,
    automatic_payment_methods: {
      enabled: true,
      allow_redirects: "never",
    },
  });

  let paymentId = null;
  // ✅ If payment succeeded, log it in DB
  if (paymentIntent.status === "succeeded") {
    const paymentRecord = await prisma.paymentActivity.create({
      data: {
        amount: params.amount,
        type: "Add money successful",
        userId: params.userId,
        txId: paymentIntent.id,
      },
    });
    paymentId = paymentRecord.id;
  } else {
    throw new ApiError(400, "Payment failed");
  }

  return {
    paymentIntent,
    paymentId,
  };
};
