import {flightBookingServices} from './flightBooking.service';
import sendResponse from '../../../shared/sendResponse';
import catchAsync from "../../../shared/catchAsync";

const createFlightBooking = catchAsync (async (req, res) => {
  await flightBookingServices.createFlightBooking(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "The flightBooking has been created successfully"
  });
})

const getAllFlightBookings = catchAsync(async (req, res) => {
  const result = await flightBookingServices.getAllFlightBookings();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "All flightBookings has been retrived successfully",
    data: result,
  });
})

const getFlightBookingById = catchAsync(async (req, res) => {
  const result = await flightBookingServices.getFlightBookingById(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "flightBooking has been retrived successfully",
    data: result,
  });
})

const updateFlightBooking = catchAsync(async (req, res) => {
  await flightBookingServices.updateFlightBooking(req.params.id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "flightBooking has been updated successfully"
  });
})

const deleteFlightBooking = catchAsync(async (req, res) => {
  await flightBookingServices.deleteFlightBooking(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "flightBooking has been deleted successfully",
  });
})

export const flightBookingControllers = {
  createFlightBooking,
  getAllFlightBookings,
  getFlightBookingById,
  updateFlightBooking,
  deleteFlightBooking,
}
  