//
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import {
  notificationServices,
  sendSingleNotification,
} from "./notification.services";

const getNotifications = catchAsync(async (req: any, res: any) => {
  const notifications = await notificationServices.getNotificationsFromDB(req);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Notifications retrieved successfully",
    data: notifications,
  });
});

const getSingleNotificationById = catchAsync(async (req: any, res: any) => {
  const notificationId = req.params.id;
  const notification = await notificationServices.getSingleNotificationFromDB(
    req,
    notificationId,
  );

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Notification retrieved successfully",
    data: notification,
  });
});
const sendSingleNotificationController = catchAsync(async (req, res) => {
  const { id: receiverId } = req.user
  const result = await sendSingleNotification(receiverId, req.body.content);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Notification sent successfully",
    data: result,
  });
});

export const notificationController = {
  getNotifications,
  getSingleNotificationById,
  sendSingleNotificationController,
};
