import { airportsServices } from "./airports.service";
import sendResponse from "../../../shared/sendResponse";
import catchAsync from "../../../shared/catchAsync";

const createAirports = catchAsync(async (req, res) => {
  await airportsServices.createAirportsIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "The airports has been created successfully",
  });
});

/* const getAllAirportss = catchAsync(async (req, res) => {
  let search;
  search = req.query?.search;

  const result = await airportsServices.getAllAirportsFromDB(search);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "All airportss have been retrieved successfully",
    data: result,
  });
});
 */

const getAllAirportss = catchAsync(async (req, res) => {
  let search: string | null = null;

  const querySearch = req.query?.search;

  if (typeof querySearch === "string") {
    search = querySearch;
  } else if (Array.isArray(querySearch) && typeof querySearch[0] === "string") {
    search = querySearch[0];
  } else {
    search = null;
  }

  const result = await airportsServices.getAllAirportsFromDB(search);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "All airports have been retrieved successfully",
    data: result,
  });
});

const getAirportsById = catchAsync(async (req, res) => {
  const result = await airportsServices.getAirportsByIdFromDB(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "airports has been retrieved successfully",
    data: result,
  });
});

const updateAirports = catchAsync(async (req, res) => {
  await airportsServices.updateAirportsIntoDB(req.params.id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "airports has been updated successfully",
  });
});

const deleteAirports = catchAsync(async (req, res) => {
  await airportsServices.deleteAirportsFromDB(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "airports has been deleted successfully",
  });
});

export const airportsControllers = {
  createAirports,
  getAllAirportss,
  getAirportsById,
  updateAirports,
  deleteAirports,
};

