import {airportsServices} from './airports.service';
import sendResponse from '../../../shared/sendResponse';
import catchAsync from "../../../shared/catchAsync";

const createAirports = catchAsync (async (req, res) => {
  await airportsServices.createAirports(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "The airports has been created successfully"
  });
})

const getAllAirportss = catchAsync(async (req, res) => {
  const result = await airportsServices.getAllAirportss();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "All airportss has been retrived successfully",
    data: result,
  });
})

const getAirportsById = catchAsync(async (req, res) => {
  const result = await airportsServices.getAirportsById(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "airports has been retrived successfully",
    data: result,
  });
})

const updateAirports = catchAsync(async (req, res) => {
  await airportsServices.updateAirports(req.params.id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "airports has been updated successfully"
  });
})

const deleteAirports = catchAsync(async (req, res) => {
  await airportsServices.deleteAirports(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "airports has been deleted successfully",
  });
})

export const airportsControllers = {
  createAirports,
  getAllAirportss,
  getAirportsById,
  updateAirports,
  deleteAirports,
}
  