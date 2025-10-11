import { Subscriptionplan } from "@prisma/client";
import prisma from "../../../shared/prisma";

/* const createSubscriptionplanIntoDB = async (data: any) => {
  await prisma.subscriptionplan.create({ data });
  return;
}; */

const createSubscriptionPlanIntoDB = async (req: Request) => {
  const { name, amount, type, interval, subscriptionTitleType, features } =
    req.body;

  const existingSubscription = await prisma.subscription.findUnique({
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

  const result = await prisma.subscription.create({
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
  const results = await prisma.subscriptionplan.findMany({
    orderBy: {
      createdAt: "desc",
    },
    omit: {
      createdAt: true,
      updatedAt: true,
    },
  });
  return results;
};

const getSubscriptionplanByIdFromDB = async (id: string) => {
  const result = await prisma.subscriptionplan.findUnique({ where: { id } });
  return result;
};

const updateSubscriptionplanIntoDB = async (
  id: string,
  data: Subscriptionplan,
) => {
  const updatedPlan = await prisma.subscriptionplan.update({
    where: { id },
    data,
  });
  return updatedPlan;
};

const deleteSubscriptionplanFromDB = async (id: string) => {
  await prisma.subscriptionplan.delete({ where: { id } });
  return;
};

export const subscriptionplanServices = {
  createSubscriptionPlanIntoDB,
  getAllSubscriptionplanFromDB,
  getSubscriptionplanByIdFromDB,
  updateSubscriptionplanIntoDB,
  deleteSubscriptionplanFromDB,
};
