//
import express from "express";
import { subscriptionplanControllers } from "./subscriptionplan.controller";
import validateRequest from "../../middlewares/validateRequest";
import { SubscriptionplanSchemaValidation } from "./subscriptionplan.validation";

const router = express.Router();

router.post(
  "/create",
  validateRequest(
    SubscriptionplanSchemaValidation.createSubscriptionplanSchema,
  ),
  subscriptionplanControllers.createSubscriptionplan,
);

router.get("/", subscriptionplanControllers.getAllSubscriptionplans);

router.get("/:id", subscriptionplanControllers.getSubscriptionplanById);

router.patch("/:id", subscriptionplanControllers.updateSubscriptionplan);

router.delete("/:id", subscriptionplanControllers.deleteSubscriptionplan);

export const subscriptionplanRoutes = router;
