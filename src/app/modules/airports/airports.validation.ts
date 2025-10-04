import * as z from 'zod';

export const createAirportsSchema = z.object({
  // Define fields
  name: z.string(),
});

export const AirportsSchemaValidation = {
  createAirportsSchema
};
  