//
import * as z from "zod";

export const createSubscriptionplanSchema = z.object({
  // Define fields
  name: z.string(),
});

export const SubscriptionplanSchemaValidation = {
  createSubscriptionplanSchema,
};

