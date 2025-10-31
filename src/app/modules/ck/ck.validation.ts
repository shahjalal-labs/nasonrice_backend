import * as z from 'zod';

export const createCkSchema = z.object({
  // Define fields
  name: z.string(),
});

export const CkSchemaValidation = {
  createCkSchema
};
  