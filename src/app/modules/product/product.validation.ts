//
import { z } from "zod";
const PetTypeEnum = z.enum(["Dog", "Cat", "Bird"]);
const createProductValidationSchema = z.object({
  name: z.string().min(2, { message: "Name is too short" }),
  price: z.number().positive({ message: "Price must be positive" }),
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
  inStock: z.number(),
});

const updateProductValidationSchema = z.object({
  name: z.string().min(2, { message: "Name is too short" }).optional(),
  price: z
    .number()
    .positive({ message: "Price must be postive number." })
    .optional(),
  description: z
    .string()
    .min(5, { message: "Description is too short" })
    .optional(),
  images: z
    .array(z.string().min(1, { message: "At least one image is required" }))
    .optional(),
  petType: z.array(PetTypeEnum).nonempty().optional(),
  weight: z.string().optional(),
  colorOptions: z.array(z.string()).optional(),
  suitableFor: z.array(z.string()).optional(),
  category: z.enum(["Food", "Toy", "Accessories"]).optional(),
  fastShipping: z.string().optional(),
  easyReturns: z.string().optional(),
  inStock: z.number().optional(),
});

export const ProductValidation = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
