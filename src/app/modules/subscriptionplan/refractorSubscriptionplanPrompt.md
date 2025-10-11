## 🌲 Full Project Structure (cwd)

```bash
/home/sj/web/flo_backend
├── bun.lock
├── developer.md
├── module.js
├── newfile.md
├── package.json
├── package-lock.json
├── pr
│   └── basic
│       └── promise.js
├── prisma
│   └── schema.prisma
├── README.md
├── routine.md
├── src
│   ├── app
│   │   ├── interfaces
│   │   │   ├── common.ts
│   │   │   └── file.ts
│   │   ├── middlewares
│   │   │   ├── auth.ts
│   │   │   ├── globalErrorHandler.ts
│   │   │   ├── optionalAuth.ts
│   │   │   ├── parseBodyData.ts
│   │   │   ├── postman.ts
│   │   │   ├── rateLimiter.ts
│   │   │   └── validateRequest.ts
│   │   ├── modules
│   │   │   ├── airports
│   │   │   │   ├── airportsApi.hurl
│   │   │   │   ├── airports.controller.ts
│   │   │   │   ├── airports.routes.ts
│   │   │   │   ├── airports.service.ts
│   │   │   │   └── airports.validation.ts
│   │   │   ├── auth
│   │   │   │   ├── authApi.hurl
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── auth.routes.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   └── auth.validation.ts
│   │   │   ├── booking
│   │   │   │   ├── bookingApi.hurl
│   │   │   │   ├── booking.controller.ts
│   │   │   │   ├── booking.route.ts
│   │   │   │   ├── booking.service.ts
│   │   │   │   └── booking.validation.ts
│   │   │   ├── flightbooking
│   │   │   │   ├── ck.js
│   │   │   │   ├── flightBookingApi.hurl
│   │   │   │   ├── flightBooking.controller.ts
│   │   │   │   ├── flightBooking.routes.ts
│   │   │   │   ├── flightBooking.service.ts
│   │   │   │   ├── flightBooking.validation.ts
│   │   │   │   └── getDistance.ts
│   │   │   ├── notifications
│   │   │   │   ├── notificationApi.hurl
│   │   │   │   ├── notification.controller.ts
│   │   │   │   ├── notification.route.ts
│   │   │   │   ├── notification.services.ts
│   │   │   │   └── notification.validation.ts
│   │   │   ├── payment
│   │   │   │   ├── getOrCreateStripeCustomer.ts
│   │   │   │   ├── paymentApi.hurl
│   │   │   │   ├── payment.controller.ts
│   │   │   │   ├── payment.routes.ts
│   │   │   │   ├── payment.service.ts
│   │   │   │   ├── payment.validation.ts
│   │   │   │   └── processAddMoneyPayment.ts
│   │   │   ├── pets
│   │   │   │   ├── petApi.hurl
│   │   │   │   ├── pets.controller.ts
│   │   │   │   ├── pets.route.ts
│   │   │   │   ├── pets.service.ts
│   │   │   │   ├── pets.validation.ts
│   │   │   │   └── refractorPetsPrompt.md
│   │   │   ├── product
│   │   │   │   ├── productApi.hurl
│   │   │   │   ├── product.controller.ts
│   │   │   │   ├── product.route.ts
│   │   │   │   ├── product.service.ts
│   │   │   │   └── product.validation.ts
│   │   │   ├── review
│   │   │   │   ├── reviewApi.hurl
│   │   │   │   ├── review.controller.ts
│   │   │   │   ├── review.routes.ts
│   │   │   │   ├── review.service.ts
│   │   │   │   └── review.validation.ts
│   │   │   ├── subscriptionplan
│   │   │   │   ├── subscriptionplanApi.hurl
│   │   │   │   ├── subscriptionplan.controller.ts
│   │   │   │   ├── subscriptionplan.routes.ts
│   │   │   │   ├── subscriptionplan.service.ts
│   │   │   │   └── subscriptionplan.validation.ts
│   │   │   └── user
│   │   │       ├── userApi.hurl
│   │   │       ├── user.controller.ts
│   │   │       ├── user.route.ts
│   │   │       ├── user.services.ts
│   │   │       └── user.validation.ts
│   │   └── routes
│   │       ├── index.ts
│   │       └── serviceAccount.ts
│   ├── app.ts
│   ├── config
│   │   ├── index.ts
│   │   └── stripe.ts
│   ├── docs
│   │   └── requirement.md
│   ├── errors
│   │   ├── ApiErrors.ts
│   │   ├── handleClientError.ts
│   │   ├── handleValidationError.ts
│   │   ├── handleZodError.ts
│   │   └── parsePrismaValidationError.ts
│   ├── helpers
│   │   ├── fileUploader.ts
│   │   ├── firebase.admin.ts
│   │   ├── generateOtp.ts
│   │   ├── jwtHelpers.ts
│   │   ├── onboardingHtml.ts
│   │   ├── redis.ts
│   │   ├── sendEmail.ts
│   │   └── uploadInSpace.ts
│   ├── interfaces
│   │   ├── common.ts
│   │   ├── error.ts
│   │   ├── file.ts
│   │   ├── index.d.ts
│   │   └── paginations.ts
│   ├── pr
│   │   └── spread.js
│   ├── server.ts
│   └── shared
│       ├── airportSearchFilter.ts
│       ├── catchAsync.ts
│       ├── pagination.ts
│       ├── pick.ts
│       ├── prisma.ts
│       ├── searchFilter.ts
│       └── sendResponse.ts
├── structure.md
├── todo.md
├── tsconfig.json
├── uploads
│   └── google.png
├── vercel.json
└── vps_deploy.md

29 directories, 118 files
```

## 📁 Target Module Tree (subscriptionplan)

```bash
/home/sj/web/flo_backend/src/app/modules/subscriptionplan
├── subscriptionplanApi.hurl
├── subscriptionplan.controller.ts
├── subscriptionplan.routes.ts
├── subscriptionplan.service.ts
└── subscriptionplan.validation.ts

1 directory, 5 files
```

## 📄 Module Files & Contents

### `subscriptionplan.service.ts`

```ts
import { SubscriptionPlan, SubscriptionType } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";
import stripe from "../../../config/stripe";

/* const createSubscriptionplanIntoDB = async (data: any) => {
  await prisma.subscriptionplan.create({ data });
  return;
}; */

const createSubscriptionPlanIntoDB = async (req: Request) => {
  const { name, amount, type, interval, subscriptionTitleType, features } =
    req.body;

  const existingSubscription = await prisma.subscriptionPlan.findUnique({
    where: { subscriptionTitleType },
  });

  if (existingSubscription) {
    throw new ApiError(
      400,
      `Subscription with title '${subscriptionTitleType}' already exists`,
    );
  }

  const product = await stripe.products.create({ name });

  if (!product) {
    throw new ApiError(400, "Product creation failed");
  }

  const prices = await stripe.prices.create({
    unit_amount: Number(amount) * 100,
    currency: "usd",
    ...(type === "subscription" &&
      interval && {
        recurring: { interval: interval },
      }),
    product: product.id,
  });

  const result = await prisma.subscriptionPlan.create({
    data: {
      features,
      interval: prices.recurring ? prices.recurring.interval : null,
      priceId: prices.id,
      productId: product.id,
      subscriptionTitleType,
      title: name,
      type: prices.recurring
        ? SubscriptionType.SUBSCRIPTION
        : SubscriptionType.ONETIME,
    },
  });

  return result;
};

const getAllSubscriptionplanFromDB = async () => {
  const results = await prisma.subscriptionPlan.findMany({
    orderBy: {
      createdAt: "desc",
    },
    omit: {
      createdAt: true,
      updatedAt: true,
    },
  });
  return results;
};

const getSubscriptionplanByIdFromDB = async (id: string) => {
  const result = await prisma.subscriptionPlan.findUnique({ where: { id } });
  return result;
};

/* const updateSubscriptionplanIntoDB = async (
  id: string,
  data: SubscriptionPlan,
) => {
  const updatedPlan = await prisma.subscriptionPlan.update({
    where: { id },
    data,
  });
  return updatedPlan;
}; */

const deleteSubscriptionplanFromDB = async (id: string) => {
  await prisma.subscriptionPlan.delete({ where: { id } });
  return;
};

export const subscriptionplanServices = {
  createSubscriptionPlanIntoDB,
  getAllSubscriptionplanFromDB,
  getSubscriptionplanByIdFromDB,
  // updateSubscriptionplanIntoDB,
  deleteSubscriptionplanFromDB,
};
```

### `subscriptionplan.routes.ts`

```ts
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
```

### `subscriptionplan.validation.ts`

```ts
//
import * as z from "zod";

const createSubscriptionplanSchema = z
  .object({
    name: z.string().min(3),
    description: z.string().min(3),
    price: z.number().positive(),
    bestDeal: z.string().optional(),
    benefits: z.array(z.string()).min(3),
  })
  .strict();

const updateSubscriptionplanSchema = z
  .object({
    name: z.string().min(3),
    description: z.string().min(3),
    price: z.number().positive(),
    bestDeal: z.string().optional(),
    benefits: z.array(z.string()).min(3),
  })
  .partial()
  .strict();

export const SubscriptionplanSchemaValidation = {
  createSubscriptionplanSchema,
  updateSubscriptionplanSchema,
};
```

### `subscriptionplan.controller.ts`

```ts
//
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { subscriptionplanServices } from "./subscriptionplan.service";

const createSubscriptionPlan = catchAsync(async (req, res) => {
  const result =
    await subscriptionplanServices.createSubscriptionPlanIntoDB(req);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Subscription created successfully",
    data: result,
  });
});

export const subscriptionplanController = {
  createSubscriptionPlan,
};
```

### `subscriptionplanApi.hurl`

```hurl

GET {{baseUrl}}/subscriptionplans


GET {{baseUrl}}/subscriptionplans/68e9c14fcde613d1fdac1688




POST {{baseUrl}}/subscriptionplans/create
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDNjN2RiOTY4YmJjMDFiMTAzNTZkZiIsImVtYWlsIjoibWlyLmRldmVsb3Blci5oYXNhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTc1OTEyNDQwNSwiZXhwIjoxNzYwNDIwNDA1fQ.fMPWmJrnxykxj8v3OcN2J4jsTH9LNcQYY8kKyNLbNNU


Content-Type: application/json


  {
    "name": "Need to delete",
    "description": "4 free flight nanny consultations per year.",
    "price": 19,
    "benefits": [
      "Everything in Premium Plan",
      "4 free flight nanny consultations per year",
      "VIP customer support with dedicated manager"
    ]
  }


PATCH {{baseUrl}}/subscriptionplans/68e9c14fcde613d1fdac1688

Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDNjN2RiOTY4YmJjMDFiMTAzNTZkZiIsImVtYWlsIjoibWlyLmRldmVsb3Blci5oYXNhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTc1OTEyNDQwNSwiZXhwIjoxNzYwNDIwNDA1fQ.fMPWmJrnxykxj8v3OcN2J4jsTH9LNcQYY8kKyNLbNNU

Content-Type: application/json

{
  "price": 0
}


DELETE {{baseUrl}}/subscriptionplans/68e9d50d5b3883291064fb28
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDNjN2RiOTY4YmJjMDFiMTAzNTZkZiIsImVtYWlsIjoibWlyLmRldmVsb3Blci5oYXNhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTc1OTEyNDQwNSwiZXhwIjoxNzYwNDIwNDA1fQ.fMPWmJrnxykxj8v3OcN2J4jsTH9LNcQYY8kKyNLbNNU


```
