import express from "express";
import { PetController } from "./pets.controller";
import { fileUploader } from "../../../helpers/fileUploader";
import { parseBodyData } from "../../middlewares/parseBodyData";
import auth from "../../middlewares/auth";
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

export const PetRoute = router;
