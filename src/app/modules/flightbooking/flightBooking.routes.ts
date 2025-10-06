import express from "express";
import { flightBookingControllers } from "./flightBooking.controller";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { FlightBookingSchemaValidation } from "./flightBooking.validation";
import { getAirportDistance } from "./getDistance";

const router = express.Router();

router.post(
  "/create",
  auth(),
  validateRequest(FlightBookingSchemaValidation.createFlightBookingSchema),
  flightBookingControllers.createFlightBooking,
);
router.get("/", flightBookingControllers.getAllFlightBookings);
router.get("/flight-price", async (req, res) => {
  const from = req.query.from;
  const to = req.query.to;
  const price = await getAirportDistance(from as string, to as string);
  res.status(200).json({ price });
});

router.get("/:id", flightBookingControllers.getFlightBookingById);
router.patch("/:id", flightBookingControllers.updateFlightBooking);
router.delete("/:id", flightBookingControllers.deleteFlightBooking);

export const flightBookingRoutes = router;
