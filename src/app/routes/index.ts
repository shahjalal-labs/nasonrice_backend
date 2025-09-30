//
import express from "express";
import { userRoutes } from "../modules/user/user.route";
import { authRoute } from "../modules/auth/auth.routes";
import { PetRoute } from "../modules/pets/pets.route";
import { ProductRoute } from "../modules/product/product.route";
import { paymentRoutes } from "../modules/payment/payment.routes";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
