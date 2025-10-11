//
import express from "express";
import { subscriptionplanControllers } from "./subscriptionplan.controller";
import validateRequest from "../../middlewares/validateRequest";
import { SubscriptionplanSchemaValidation } from "./subscriptionplan.validation";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/create",
  auth(),
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
