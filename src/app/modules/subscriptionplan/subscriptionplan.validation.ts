//
import { z } from "zod";

const createSubscriptionplanSchema = z
  .object({
    title: z.string().min(3),
    amount: z.number().positive(),
    type: z.enum(["one_time", "subscription"]),
    interval: z.enum(["month", "year"]),
    subscriptionTitleType: z.enum(["MONTHLY", "YEARLY"]),
    features: z.array(z.string()).min(3),
  })
  .strict();

const createSubscriptionSchema = z
  .object({
    paymentMethodId: z.string().min(3),
  })
  .strict();

const updateSubscriptionStatusValidationSchema = z.object({
  priceId: z.string().min(3),
  status: z.enum(["ACTIVE", "DEACTIVE"]),
});

const updateSubscriptionplanSchema = createSubscriptionplanSchema.partial();

export const SubscriptionplanSchemaValidation = {
  createSubscriptionplanSchema,
  updateSubscriptionplanSchema,
  createSubscriptionSchema,
  updateSubscriptionStatusValidationSchema,
};
