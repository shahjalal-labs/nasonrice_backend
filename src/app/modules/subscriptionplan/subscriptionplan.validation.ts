//
import { z } from "zod";

const createSubscriptionplanSchema = z
  .object({
    name: z.string().min(3),
    amount: z.number().positive(),
    type: z.enum(["one_time", "subscription"]),
    interval: z.enum(["month", "year"]).optional(),
    subscriptionTitleType: z.enum(["MONTHLY", "YEARLY"]).optional(),
    features: z.array(z.string()).min(3),
  })
  .strict();

const updateSubscriptionplanSchema = createSubscriptionplanSchema.partial();

export const SubscriptionplanSchemaValidation = {
  createSubscriptionplanSchema,
  updateSubscriptionplanSchema,
};
