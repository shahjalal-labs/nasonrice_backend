//
import express from "express";
import { userRoutes } from "../modules/user/user.route";
import { authRoute } from "../modules/auth/auth.routes";
import { PetRoute } from "../modules/pets/pets.route";
import { ProductRoute } from "../modules/product/product.route";
import { paymentRoutes } from "../modules/payment/payment.routes";
import { BookingRoute } from "../modules/booking/booking.route";
import { airportsRoutes } from "../modules/airports/airports.routes";
import { flightBookingRoutes } from "../modules/flightbooking/flightBooking.routes";
import { notificationsRoute } from "../modules/notifications/notification.route";
import { reviewRoutes } from "../modules/review/review.routes";
import { subscriptionplanRoutes } from "../modules/subscriptionplan/subscriptionplan.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/pets",
    route: PetRoute,
  },
  {
    path: "/product",
    route: ProductRoute,
  },
  {
    path: "/payments",
    route: paymentRoutes,
  },
  {
    path: "/booking",
    route: BookingRoute,
  },

  {
    path: "/airports",
    route: airportsRoutes,
  },

  {
    path: "/flightBookings",
    route: flightBookingRoutes,
  },
  {
    path: "/notifications",
    route: notificationsRoute,
  },
  {
    path: "/reviews",
    route: reviewRoutes,
  },
  {
    path: "/subscriptionplans",
    route: subscriptionplanRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
