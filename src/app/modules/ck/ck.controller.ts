import {ckServices} from './ck.service';
import sendResponse from '../../../shared/sendResponse';
import catchAsync from "../../../shared/catchAsync";

const createCk = catchAsync (async (req, res) => {
  await ckServices.createCkIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "The ck has been created successfully"
  });
});

const getAllCks = catchAsync(async (req, res) => {
  const result = await ckServices.getAllCkFromDB();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "All cks have been retrieved successfully",
    data: result,
  });
});

const getCkById = catchAsync(async (req, res) => {
  const result = await ckServices.getCkByIdFromDB(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "ck has been retrieved successfully",
    data: result,
  });
});

const updateCk = catchAsync(async (req, res) => {
  await ckServices.updateCkIntoDB(req.params.id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "ck has been updated successfully"
  });
});

const deleteCk = catchAsync(async (req, res) => {
  await ckServices.deleteCkFromDB(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "ck has been deleted successfully",
  });
});

export const ckControllers = {
  createCk,
  getAllCks,
  getCkById,
  updateCk,
  deleteCk,
};
  