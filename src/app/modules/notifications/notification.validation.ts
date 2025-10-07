import { z } from "zod";

const sendNotificationValidationSchema = z
  .object({
    // receiverId: z.string(),
    title: z.string().min(4),
    content: z.string().min(4),
  })
  .strict();

export const sendNotificationValidation = {
  sendNotificationValidationSchema,
};
