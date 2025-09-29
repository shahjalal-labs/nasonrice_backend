//
import { ObjectId } from "mongodb";
import { z } from "zod";

const createPetValidationSchema = z.object({
  petName: z.string().min(2).max(100),
  petType: z.enum(["Cat", "Dog", "Bird"]),
  petAge: z.number().int(),
  userId: z.string().refine((v) => ObjectId.isValid(v), "Invalid ObjectId"),
});

const updatePetValidationSchema = z
  .object({
    petType: z.enum(["Dog", "Cat", "Bird"]).optional(),
    petName: z.string().min(2).max(100).optional(),
    petAge: z.string().optional(),
    weight: z.string().optional(),
  })
  // .strict();
export const PetValidationSchema = {
  createPetValidationSchema,
  updatePetValidationSchema,
};
