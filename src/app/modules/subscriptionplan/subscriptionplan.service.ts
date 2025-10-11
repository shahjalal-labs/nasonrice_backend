import { Subscriptionplan } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createSubscriptionplanIntoDB = async (data: any) => {
  await prisma.subscriptionplan.create({ data });
  return;
};

const getAllSubscriptionplanFromDB = async () => {
  const results = await prisma.subscriptionplan.findMany();
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
  createSubscriptionplanIntoDB,
  getAllSubscriptionplanFromDB,
  getSubscriptionplanByIdFromDB,
  updateSubscriptionplanIntoDB,
  deleteSubscriptionplanFromDB,
};
