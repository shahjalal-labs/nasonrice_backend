//
import * as z from "zod";

export const createFlightBookingSchema = z
  .object({
    from: z.string().min(2),
    to: z.string().min(2),
    journeyDate: z
      .string()
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid ISO date string",
      })
      .transform((val) => new Date(val)), // Optional: convert to Date

    returnDate: z
      .string()
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid ISO date string",
      })
      .transform((val) => new Date(val)), // Optional: convert to Date
    flightStatus: z.enum(["Oneway", "Roundway", "Multicity"]).default("Oneway"),
    flightGoer: z.string().min(2),
    // price: z.number().positive(),
  })
  .strict();

export const FlightBookingSchemaValidation = {
  createFlightBookingSchema,
};
