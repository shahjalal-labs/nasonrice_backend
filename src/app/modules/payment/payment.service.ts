// import { Subscription } from "@prisma/client";
import stripe from "../../../config/stripe";
import ApiError from "../../../errors/ApiErrors";
import prisma from "../../../shared/prisma";
const addMoney = async (
  payload: {
    paymentMethodId: string;
    productId: string;
    quantity: any;
  },
  userId: string,
) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });
  if (!user) {
    throw new ApiError(404, "user not found");
  }

  const product = await prisma.product.findUnique({
    where: {
      id: payload.productId,
    },
  });

  const amount = product.price * Number(payload.quantity);

  let addMoneyCustomerId = user.addMoneyCustomerId;

  if (addMoneyCustomerId === null) {
    const customer = await stripe.customers.create({
      name: user.firstName + " " + user?.lastName,
      email: user.email,
    });
    addMoneyCustomerId = customer.id;

    await prisma.user.update({
      where: { id: userId },
      data: {
        addMoneyCustomerId: addMoneyCustomerId,
      },
    });
    await stripe.paymentMethods.attach(payload.paymentMethodId, {
      customer: addMoneyCustomerId,
    });
    await stripe.customers.update(addMoneyCustomerId, {
      invoice_settings: { default_payment_method: payload.paymentMethodId },
    });
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: "usd",
    payment_method: payload.paymentMethodId,
    customer: addMoneyCustomerId,
    confirm: true,
    description: `Add money to platform account. user:${user.firstName + " " + user?.lastName}`,
    automatic_payment_methods: {
      enabled: true,
      allow_redirects: "never",
    },
  });

  if (paymentIntent.status === "succeeded") {
    console.log(
      paymentIntent,
      "[1;31mpaymentIntent in payment.service.ts at line 418[0m",
    );

    await prisma.paymentActivity.create({
      data: {
        amount: amount,
        type: "Add money successfull",
        userId: userId,
        txId: paymentIntent.id,
      },
    });
  }

  return {
    txId: paymentIntent.id,
  };
};

const myBalance = async (userId: string) => {
  const userInfo = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      // balance: true,
      totalPay: true,
    },
  });

  return userInfo;
};

export const paymentServices = {
  // createOnboarding,
  // createPlan,
  // buySubscription,
  // myWalletBalance,
  // withdrawBalance,
  // myPaymentActivity,
  addMoney,
  myBalance,
};
