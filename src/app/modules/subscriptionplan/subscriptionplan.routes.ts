//
import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { SubscriptionplanSchemaValidation } from "./subscriptionplan.validation";
import auth from "../../middlewares/auth";
import { subscriptionplanController } from "./subscriptionplan.controller";

const router = express.Router();

router.post(
  "/create",
  auth(),
  validateRequest(
    SubscriptionplanSchemaValidation.createSubscriptionplanSchema,
  ),
  subscriptionplanController.createSubscriptionPlan,
);

router.get("/", subscriptionplanController.getAllSubscriptionplans);

router.get("/:id", subscriptionplanController.getSubscriptionplanById);

router.delete(
  "/:id",
  auth(),
  subscriptionplanController.deleteSubscriptionplan,
);

export const subscriptionplanRoutes = router;
