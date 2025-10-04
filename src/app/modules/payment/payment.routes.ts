//
import express from "express";
import auth from "../../middlewares/auth";
import { PaymentControllers } from "./payment.controller";
const router = express.Router();

router.post("/onboarding/create-subscription", auth());
router.get(
  "/payment-details/:id",
  auth(),
  PaymentControllers.getPaymentDetails,
);

export const paymentRoutes = router;
