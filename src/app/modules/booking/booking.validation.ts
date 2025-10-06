//

import { z } from "zod";

const createBookingValidationSchema = z.object({
  productId: z.string(),
  // userId: z.string(),
  quantity: z.number().positive(),
  paymentMethodId: z.string(),
  flightBookingId: z.string(),
});

export const BookingValidation = {
  createBookingValidationSchema,
};
