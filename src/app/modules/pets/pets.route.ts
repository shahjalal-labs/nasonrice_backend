import express from "express";
import { PetController } from "./pets.controller";
import { fileUploader } from "../../../helpers/fileUploader";
import { parseBodyData } from "../../middlewares/parseBodyData";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { PetValidationSchema } from "./pets.validation";
const router = express.Router();

router.post(
  "/create",
  auth(),
  fileUploader.upload.single("petImage"),
  parseBodyData,
  PetController.createPet,
);

router.get("/", auth(), PetController.getPet);
router.get("/:id", auth(), PetController.getPetById);
router.patch(
  "/:id",
  auth(),
  fileUploader.profileImage,
  parseBodyData,
  validateRequest(PetValidationSchema.updatePetValidationSchema),
  PetController.updatePet,
);

export const PetRoute = router;
