import {ck2Services} from './ck2.service';
import sendResponse from '../../../shared/sendResponse';
import catchAsync from "../../../shared/catchAsync";

const createCk2 = catchAsync (async (req, res) => {
  await ck2Services.createCk2(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "The ck2 has been created successfully"
  });
});

const getAllCk2s = catchAsync(async (req, res) => {
  const result = await ck2Services.getAllCk2();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "All ck2s have been retrieved successfully",
    data: result,
  });
});

const getCk2ById = catchAsync(async (req, res) => {
  const result = await ck2Services.getCk2ById(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "ck2 has been retrieved successfully",
    data: result,
  });
});

const updateCk2 = catchAsync(async (req, res) => {
  await ck2Services.updateCk2(req.params.id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "ck2 has been updated successfully"
  });
});

const deleteCk2 = catchAsync(async (req, res) => {
  await ck2Services.deleteCk2(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "ck2 has been deleted successfully",
  });
});

export const ck2Controllers = {
  createCk2,
  getAllCk2s,
  getCk2ById,
  updateCk2,
  deleteCk2,
};
  