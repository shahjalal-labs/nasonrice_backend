import * as z from "zod";

export const createFlightBookingSchema = z.object({
  from: z.string().min(2),
  to: z.string().min(2),
  journeyDate: "",
});

export const FlightBookingSchemaValidation = {
  createFlightBookingSchema,
};

