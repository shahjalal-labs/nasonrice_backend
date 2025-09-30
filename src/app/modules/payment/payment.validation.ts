import { z } from "zod";

const addmoneyValidationSchema = z.object({
  amount: z.number().positive(),
  paymentMethodId: z.string(),
});

export const PaymentValidation = {
  addmoneyValidationSchema,
};
