import express from "express";
import { flightBookingControllers } from "./flightBooking.controller";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { FlightBookingSchemaValidation } from "./flightBooking.validation";

const router = express.Router();

router.post(
  "/create",
  auth(),
  validateRequest(FlightBookingSchemaValidation.createFlightBookingSchema),
  flightBookingControllers.createFlightBooking,
);
router.get("/", flightBookingControllers.getAllFlightBookings);
router.get("/:id", flightBookingControllers.getFlightBookingById);
router.patch("/:id", flightBookingControllers.updateFlightBooking);
router.delete("/:id", flightBookingControllers.deleteFlightBooking);

export const flightBookingRoutes = router;
