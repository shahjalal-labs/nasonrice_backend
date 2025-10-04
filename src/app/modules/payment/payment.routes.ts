//
import express from "express";
import auth from "../../middlewares/auth";
const router = express.Router();

router.post("/onboarding/create-subscription", auth());
export const paymentRoutes = router;
