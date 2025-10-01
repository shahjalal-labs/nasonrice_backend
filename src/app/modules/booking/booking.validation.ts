//

import { z } from "zod";

const createBookingValidationSchema = z.object({
  productId: z.string(),
  // userId: z.string(),
  qunatity: z.number().positive(),
  paymentId: z.string(),
});

export const BookingValidation = {
  createBookingValidationSchema,
};
