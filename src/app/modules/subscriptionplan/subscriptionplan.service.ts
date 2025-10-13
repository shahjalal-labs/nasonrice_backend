//
import { SubscriptionPlan, SubscriptionType } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";
import stripe from "../../../config/stripe";
import { ICreateSubscriptionPlan } from "./subscriptionplan.interface";

const createSubscriptionPlanIntoDB = async (data: ICreateSubscriptionPlan) => {
  const { name, amount, type, interval, subscriptionTitleType, features } =
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

  const product = await stripe.products.create({ name });

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
      title: name,
      type: prices.recurring
        ? SubscriptionType.SUBSCRIPTION
        : SubscriptionType.ONETIME,
    },
  });

  return result;
};

const getAllSubscriptionplanFromDB = async () => {
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
};

const getSubscriptionplanByIdFromDB = async (id: string) => {
  const result = await prisma.subscriptionPlan.findUnique({ where: { id } });
  if (!result) throw new ApiError(404, "Subscription plan not found");
  return result;
};

const deleteSubscriptionplanFromDB = async (id: string) => {
  await prisma.subscriptionPlan.delete({ where: { id } });
  return;
};

export const subscriptionplanServices = {
  createSubscriptionPlanIntoDB,
  getAllSubscriptionplanFromDB,
  getSubscriptionplanByIdFromDB,
  deleteSubscriptionplanFromDB,
};
