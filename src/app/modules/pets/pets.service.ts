//
import { Pet } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";
import { Request } from "express";
import { uploadInSpace } from "../../../helpers/uploadInSpace";

const createPetIntoDB = async (req: Request) => {
  const payload = req.body;
  console.log(req.user, "middleware user");
  const existingUser = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
  });
  if (!existingUser) {
    throw new ApiError(404, "User not found");
  }
  let petImage;

  const file = req.file;
  if (file) {
    petImage = await uploadInSpace(file, "pets/petImage");
  }

  if (!petImage) {
    throw new ApiError(400, "Pet image is required");
  }
  const result = await prisma.pet.create({
    data: {
      ...payload,
      userId: req.user.id,
      petImage,
    },
  });
  return result;
};

const getAllPetsFromDB = async () => {
  const result = await prisma.pet.findMany({
    include: {
      user: {
        select: {
          firstName: true,
          lastName: true,
          email: true,
        },
      },
    },
    omit: {
      createdAt: true,
      updatedAt: true,
    },
  });
  if (!result) {
    throw new ApiError(404, "User not found");
  }

  return result;
};

const getPetByIdFromDB = async (petId: string) => {
  const result = await prisma.pet.findUnique({
    where: {
      id: petId,
    },
    include: {
      user: {
        select: {
          email: true,
        },
      },
    },
  });
  if (!result) throw new ApiError(404, "Pet not found");
  return result;
};

export const PetService = {
  createPetIntoDB,
  getAllPetsFromDB,
  getPetByIdFromDB,
};
