//
import { z } from "zod";

const createProductValidationSchema = {
  name: z.string().min(2, { message: "Name is too short" }),
  price: z.number(),
  description: z.string().min(5, { message: "Description is too short" }),
  images: z.array(
    z.string().min(1, { message: "At least one image is required" }),
  ),
  PetType
};

export const ProductValidation = {
  createProductValidationSchema,
};
