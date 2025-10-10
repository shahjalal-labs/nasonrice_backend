//
import * as z from "zod";

export const createSubscriptionplanSchema = z
  .object({
    name: z.string().min(3),
    description: z.string().min(3),
    price: z.number().positive(),
    bestDeal: z.string().optional(),
    benefits: z.array(z.string()).min(3),
  })
  .strict();

export const SubscriptionplanSchemaValidation = {
  createSubscriptionplanSchema,
};
