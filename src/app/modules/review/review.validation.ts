import * as z from "zod";

export const createReviewSchema = z
  .object({
    productId: z.string().length(24).optional(),
    flightBookingId: z.string().length(24).optional(),
    rating: z.number().min(1).max(5),
    comment: z.string().min(2).max(300),
  })
  .strict();

export const ReviewSchemaValidation = {
  createReviewSchema,
};

