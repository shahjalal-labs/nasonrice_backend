import * as z from 'zod';

export const createReviewSchema = z.object({
  // Define fields
  name: z.string(),
});

export const ReviewSchemaValidation = {
  createReviewSchema
};
  