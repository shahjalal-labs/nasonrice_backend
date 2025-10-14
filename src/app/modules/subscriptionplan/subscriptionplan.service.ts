//
import {
  SubscriptionPlan,
  SubscriptionTitleType,
  SubscriptionType,
} from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";
import stripe from "../../../config/stripe";
import { ICreateSubscriptionPlan } from "./subscriptionplan.interface";
import { promisify } from "util";
import { getOrCreateAddMoneyCustomer } from "../payment/getOrCreateStripeCustomer";

const createSubscriptionPlanIntoDB = async (data: ICreateSubscriptionPlan) => {
  const { title, amount, type, interval, subscriptionTitleType, features } =
    data;

  const existingSubscription = await prisma.subscriptionPlan.findUnique({
    where: { subscriptionTitleType },
  });

  if (existingSubscription) {
    throw new ApiError(
      400,
      `Subscription with title '${subscriptionTitleType}' already exists`,
    );
  }

  const product = await stripe.products.create({ name: title });

  if (!product) {
    throw new ApiError(400, "Product creation failed");
  }

  const prices = await stripe.prices.create({
    unit_amount: Number(amount) * 100,
    currency: "usd",
    ...(type === "subscription" &&
      interval && {
        recurring: { interval: interval },
      }),
    product: product.id,
  });

  const result = await prisma.subscriptionPlan.create({
    data: {
      features,
      interval: prices.recurring ? prices.recurring.interval : null,
      priceId: prices.id,
      productId: product.id,
      subscriptionTitleType,
      title,
      type: prices.recurring
        ? SubscriptionType.SUBSCRIPTION
        : SubscriptionType.ONETIME,
    },
  });

  return result;
};

/* const getAllSubscriptionplanFromDB = async () => {
  const results = await prisma.subscriptionPlan.findMany({
    orderBy: {
      createdAt: "desc",
    },
    omit: {
      createdAt: true,
      updatedAt: true,
    },
  });
  if (!results.length)
    throw new ApiError(404, "No Subscription plan available");
  return results;
}; */

const getSubscriptionplanByIdFromDB = async (id: string) => {
  const result = await prisma.subscriptionPlan.findUnique({ where: { id } });
  if (!result) throw new ApiError(404, "Subscription plan not found");
  return result;
};

const getAllSubscriptionplanFromDB = async () => {
  const products = await prisma.subscriptionPlan.findMany({
    select: {
      id: true,
      title: true,
      priceId: true,
      features: true,
    },
  });

  const plansWithPrice = await Promise.all(
    products.map(async (product) => {
      try {
        const price = await stripe.prices.retrieve(product.priceId);
        return {
          ...product,
          price: price.unit_amount ? price.unit_amount / 100 : null,
        };
      } catch (error) {
        console.error(
          `Failed to fetch Stripe price for ID ${product.priceId}:`,
          error,
        );
        return {
          ...product,
          price: null,
        };
      }
    }),
  );

  return plansWithPrice;
};

const deleteSubscriptionplanFromDB = async (id: string) => {
  const subscriptionPlan = await prisma.subscriptionPlan.findUnique({
    where: { id },
  });
  if (!subscriptionPlan) throw new ApiError(404, "Subscription plan not found");
  await prisma.subscriptionPlan.delete({ where: { id } });
  return;
};

const createSubscriptionIntoDB = async (
  priceId: string,
  paymentMethodId: string,
  userId: string,
) => {
  const customerId = await getOrCreateAddMoneyCustomer(userId, paymentMethodId);
  if (!priceId) throw new ApiError(400, "Price ID is required");

  const existingSubscription = await prisma.userSubscription.findUnique({
    where: {
      userId_priceId: { userId, priceId },
    },
  });

  if (existingSubscription) {
    throw new ApiError(
      400,
      "User already has an active subscription for this plan.",
    );
  }

  await stripe.paymentMethods.attach(paymentMethodId, { customer: customerId });
  await stripe.customers.update(customerId, {
    invoice_settings: { default_payment_method: paymentMethodId },
  });

  const stripeSubscription = await stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: priceId }],
    // expand: ["latest_invoice.payment_intent"],
    metadata: {
      priceId,
      userId,
    },
  });

  const subscription = await prisma.subscriptionPlan.findUnique({
    where: { priceId },
  });

  if (!subscription) {
    throw new ApiError(404, `Subscription with priceId: ${priceId} not found`);
  }
  const result = await prisma.userSubscription.upsert({
    where: { userId_priceId: { userId, priceId } },
    create: {
      features: subscription?.features || {},
      userId: userId,
      priceId: priceId,
      subscriptionId: subscription?.id,
      subscriptionTitleType:
        subscription?.subscriptionTitleType as SubscriptionTitleType,
      subscriptionPayId: stripeSubscription.id,
    },
    update: {
      status: "ACTIVE",
    },
  });
  await prisma.user.update({
    where: { id: userId },
    data: {
      subscriptionType:
        subscription.subscriptionTitleType as SubscriptionTitleType,
    },
  });
  return result;
};

const updateSubscriptionStatusInDB = async (
  userId: string,
  priceId: string,
  status: "ACTIVE" | "DEACTIVE",
) => {
  try {
    const existingSubscription = await prisma.userSubscription.findFirst({
      where: {
        userId,
        priceId,
      },
    });

    if (!existingSubscription) {
      throw new ApiError(
        404,
        `No subscription found for user ${userId} with priceId ${priceId}`,
      );
    }

    await prisma.userSubscription.update({
      where: {
        userId_priceId: { userId, priceId },
      },
      data: {
        status,
      },
    });
  } catch (error) {
    throw new ApiError(500, "Failed to update subscription status");
  }
};
export const subscriptionplanServices = {
  createSubscriptionPlanIntoDB,
  getAllSubscriptionplanFromDB,
  getSubscriptionplanByIdFromDB,
  deleteSubscriptionplanFromDB,
  createSubscriptionIntoDB,
  updateSubscriptionStatusInDB,
};
