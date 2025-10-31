import * as z from 'zod';

export const createCk2Schema = z.object({
  // Define fields
  name: z.string(),
});

export const Ck2SchemaValidation = {
  createCk2Schema
};
  