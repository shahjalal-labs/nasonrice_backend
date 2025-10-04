//
import express from "express";
import { flightBookingControllers } from "./flightBooking.controller";

const router = express.Router();

router.post("/", flightBookingControllers.createFlightBooking);
router.get("/", flightBookingControllers.getAllFlightBookings);
router.get("/:id", flightBookingControllers.getFlightBookingById);
router.patch("/:id", flightBookingControllers.updateFlightBooking);
router.delete("/:id", flightBookingControllers.deleteFlightBooking);

export const flightBookingRoutes = router;

