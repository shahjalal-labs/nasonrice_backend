import * as z from 'zod';

export const createFlightBookingSchema = z.object({
  // Define fields
  name: z.string(),
});

export const FlightBookingSchemaValidation = {
  createFlightBookingSchema
};
  