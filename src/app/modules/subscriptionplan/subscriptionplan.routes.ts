//
import express from "express";
import { subscriptionplanControllers } from "./subscriptionplan.controller";

const router = express.Router();

router.post("/create", subscriptionplanControllers.createSubscriptionplan);
router.get("/", subscriptionplanControllers.getAllSubscriptionplans);
router.get("/:id", subscriptionplanControllers.getSubscriptionplanById);
router.patch("/:id", subscriptionplanControllers.updateSubscriptionplan);
router.delete("/:id", subscriptionplanControllers.deleteSubscriptionplan);

export const subscriptionplanRoutes = router;
