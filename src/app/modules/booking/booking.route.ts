//
import express from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
const router = express.Router();
router.post("/create", auth(), validateRequest(""));
export const BookingRoute = router;
