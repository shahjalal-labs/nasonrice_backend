import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { PetService } from "./pets.service";
import sendResponse from "../../../shared/sendResponse";

const createPet = catchAsync(async (req: Request, res: Response) => {
  const result = await PetService.createPetIntoDB(req);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "pet created successfully",
    data: result,
  });
});

const getPet = catchAsync(async (req: Request, res: Response) => {
  const result = await PetService.getAllPetsFromDB();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Pets retrieved successfully",
    data: result,
  });
});

const getPetById = catchAsync(async (req, res) => {
  const result = await PetService.getPetByIdFromDB(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Pet retrieved successfully",
    data: result,
  });
});

const updatePet = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await PetService.updatePetIntoDB();
});
export const PetController = {
  createPet,
  getPet,
  getPetById,
  updatePet,
};
