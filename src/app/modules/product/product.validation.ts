//
import { z } from "zod";
const PetTypeEnum = z.enum(["Dog", "Cat", "Bird"]);
const createProductValidationSchema = z.object({
  name: z.string().min(2, { message: "Name is too short" }),
  price: z.number(),
  description: z.string().min(5, { message: "Description is too short" }),
  images: z.array(
    z.string().min(1, { message: "At least one image is required" }),
  ),
  petType: z.array(PetTypeEnum).nonempty(),
  weight: z.string(),
  colorOptions: z.array(z.string()),
  suitableFor: z.array(z.string()),
  category: z.enum(["Food", "Toy", "Accessories"]),
  fastShipping: z.string().optional(),
  easyReturns: z.string().optional(),
});

export const ProductValidation = {
  createProductValidationSchema,
};
