import { z } from "zod";

const authLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const googleLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  fullName: z.string().min(1, "Full Name is required"),
  fcmToken: z.string().min(1, "FCM token is required"),
});

const locationUpdateSchema = z.object({
  latitude: z
    .number()
    .min(-90, "Latitude must be greater than or equal to -90")
    .max(90, "Latitude must be less than or equal to 90"),
  longitude: z
    .number()
    .min(-180, "Longitude must be greater than or equal to -180")
    .max(180, "Longitude must be less than or equal to 180"),
});

const updateProfileSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters long")
    .optional(),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters long")
    .optional(),
  phoneNumber: z
    .string()
    .min(5, "Mobile must be at least 10 characters long")
    .optional(),
  nationality: z.string().optional(),
});

const sendForgotPasswordOtpValidationSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const changePasswordValidationSchema = z.object({
  currentPassword: z.string(),
  newPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character",
    ),
});
export const authValidation = {
  updateProfileSchema,
  authLoginSchema,
  googleLoginSchema,
  locationUpdateSchema,
  sendForgotPasswordOtpValidationSchema,
  changePasswordValidationSchema,
};
