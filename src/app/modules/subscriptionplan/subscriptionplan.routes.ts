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
  // validateRequest(
  //   SubscriptionplanSchemaValidation.createSubscriptionplanSchema,
  // ),
  subscriptionplanController.createSubscriptionPlan,
);

/* router.get("/", subscriptionplanControllers.getAllSubscriptionplans);

router.get("/:id", subscriptionplanControllers.getSubscriptionplanById);

router.patch(
  "/:id",
  auth(),
  validateRequest(
    SubscriptionplanSchemaValidation.updateSubscriptionplanSchema,
  ),
  subscriptionplanControllers.updateSubscriptionplan,
);

router.delete(
  "/:id",
  auth(),
  subscriptionplanControllers.deleteSubscriptionplan,
);
*/
export const subscriptionplanRoutes = router;
