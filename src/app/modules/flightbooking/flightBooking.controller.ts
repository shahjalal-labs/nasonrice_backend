//
import { flightBookingServices } from "./flightBooking.service";
import sendResponse from "../../../shared/sendResponse";
import catchAsync from "../../../shared/catchAsync";
import { getAirportDistance } from "./getDistance";
import { FlightBooking } from "@prisma/client";

const createFlightBooking = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const price = await getAirportDistance(req.body.from, req.body.to);
  req.body.price = price;

  const result = await flightBookingServices.createFlightBookingIntoDB(
    req.body,
    userId,
  );

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "The flightBooking has been created successfully",
    data: result,
  });
});

const getUserFlights = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const result = await flightBookingServices.getUserFlightsFromDB(userId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "The flightBooking has been created successfully",
    data: result,
  });
});

const getAllFlightBookings = catchAsync(async (req, res) => {
  const result = await flightBookingServices.getAllFlightBookingFromDB();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "All flightBookings have been retrieved successfully",
    data: result,
  });
});

const getFlightBookingById = catchAsync(async (req, res) => {
  const result = await flightBookingServices.getFlightBookingByIdFromDB(
    req.params.id,
  );
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "flightBooking has been retrieved successfully",
    data: result,
  });
});

const updateFlightBooking = catchAsync(async (req, res) => {
  await flightBookingServices.updateFlightBookingIntoDB(
    req.params.id,
    req.body,
  );
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "flightBooking has been updated successfully",
  });
});

const deleteFlightBooking = catchAsync(async (req, res) => {
  await flightBookingServices.deleteFlightBookingFromDB(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "flightBooking has been deleted successfully",
  });
});

export const flightBookingControllers = {
  createFlightBooking,
  getAllFlightBookings,
  getUserFlights,
  getFlightBookingById,
  updateFlightBooking,
  deleteFlightBooking,
};
