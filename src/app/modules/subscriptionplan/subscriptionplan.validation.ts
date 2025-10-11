//
import * as z from "zod";

const createSubscriptionplanSchema = z
  .object({
    name: z.string().min(3),
    description: z.string().min(3),
    price: z.number().positive(),
    bestDeal: z.string().optional(),
    benefits: z.array(z.string()).min(3),
  })
  .strict();

const updateSubscriptionplanSchema = z
  .object({
    name: z.string().min(3),
    description: z.string().min(3),
    price: z.number().positive(),
    bestDeal: z.string().optional(),
    benefits: z.array(z.string()).min(3),
  })
  .partial()
  .strict();

export const SubscriptionplanSchemaValidation = {
  createSubscriptionplanSchema,
  updateSubscriptionplanSchema,
};
