You are a **senior full-stack developer**.

## 📌 Task

You are given a real-world code module located at:

```
/home/sj/web/flo_backend/src/app/modules/pets
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- ✅ Clear separation of concerns
- ✅ Consistent, semantic naming conventions
- ✅ Modular architecture (hooks, services, utils, components)
- ✅ Scalable file/folder structure
- ✅ Industry-standard project layout and architecture
- ✅ Readable, testable, production-grade code
- ✅ 100% behavior and API compatibility

👉 Output the refactored code to a new folder: `pets_refactored`

Also return a `.sh` script that will:
- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved pets version`

---

## 🌲 Full Project Structure (cwd)

```bash
/home/sj/web/flo_backend
├── bun.lock
├── ck.html
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
│   │   │   │   ├── flightBookingApi.hurl
│   │   │   │   ├── flightBooking.controller.ts
│   │   │   │   ├── flightBooking.routes.ts
│   │   │   │   ├── flightBooking.service.ts
│   │   │   │   ├── flightBooking.validation.ts
│   │   │   │   └── getDistance.ts
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
│   │   │   │   └── pets.validation.ts
│   │   │   ├── product
│   │   │   │   ├── productApi.hurl
│   │   │   │   ├── product.controller.ts
│   │   │   │   ├── product.route.ts
│   │   │   │   ├── product.service.ts
│   │   │   │   └── product.validation.ts
│   │   │   └── user
│   │   │       ├── userApi.hurl
│   │   │       ├── user.controller.ts
│   │   │       ├── user.route.ts
│   │   │       ├── user.services.ts
│   │   │       └── user.validation.ts
│   │   └── routes
│   │       └── index.ts
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

26 directories, 100 files
```

## 📁 Target Module Tree (pets)

```bash
/home/sj/web/flo_backend/src/app/modules/pets
├── petApi.hurl
├── pets.controller.ts
├── pets.route.ts
├── pets.service.ts
└── pets.validation.ts

1 directory, 5 files
```

## 📄 Module Files & Contents

### `pets.service.ts`
```ts
//
import { Pet } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";
import { Request } from "express";
import { uploadInSpace } from "../../../helpers/uploadInSpace";
import { ObjectId } from "mongodb";
const createPetIntoDB = async (req: Request) => {
  const payload = req.body;
  console.log(req.user, "middleware user");
  const existingUser = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
  });
  if (!existingUser) {
    throw new ApiError(404, "User not found");
  }
  let petImage;

  const file = req.file;
  if (file) {
    petImage = await uploadInSpace(file, "pets/petImage");
  }

  if (!petImage) {
    throw new ApiError(400, "Pet image is required");
  }
  const result = await prisma.pet.create({
    data: {
      ...payload,
      userId: req.user.id,
      petImage,
    },
  });
  return result;
};

const getAllPetsFromDB = async () => {
  const result = await prisma.pet.findMany({
    include: {
      user: {
        select: {
          firstName: true,
          lastName: true,
          email: true,
        },
      },
    },
    omit: {
      createdAt: true,
      updatedAt: true,
    },
  });
  if (!result) {
    throw new ApiError(404, "User not found");
  }

  return result;
};

const getPetByIdFromDB = async (petId: string) => {
  const result = await prisma.pet.findUnique({
    where: {
      id: petId,
    },
    include: {
      user: {
        select: {
          email: true,
          firstName: true,
          lastName: true,
        },
      },
    },
  });
  if (!result) throw new ApiError(404, "Pet not found");
  return result;
};

const updatePetIntoDB = async (payload: any, req: Request) => {
  const { id: petId } = req.params;

  const userId = req.user.id;

  // const file = req.file;
  const file = req.file as Express.Multer.File;
  console.log(file, "[1;31mfile in pets.service.ts at line 88[0m");
  let petImage;
  if (file) {
    petImage = await uploadInSpace(file, "pet/petImage");
  }

  const existingPet = await prisma.pet.findUnique({
    where: {
      id: petId,
    },
  });
  if (!existingPet) throw new ApiError(404, "Pet not found");
  if (existingPet.userId !== userId)
    throw new ApiError(401, "You are not authorized to update this pet");
  const result = await prisma.pet.update({
    where: {
      id: petId,
    },
    data: {
      ...payload,
      ...(petImage ? { petImage } : {}),
    },
  });
  return result;
};

export const PetService = {
  createPetIntoDB,
  getAllPetsFromDB,
  getPetByIdFromDB,
  updatePetIntoDB,
};
```

### `pets.controller.ts`
```ts
import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { PetService } from "./pets.service";
import sendResponse from "../../../shared/sendResponse";

const createPet = catchAsync(async (req: Request, res: Response) => {
  const result = await PetService.createPetIntoDB(req);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "pet created successfully",
    data: result,
  });
});

const getPet = catchAsync(async (req: Request, res: Response) => {
  const result = await PetService.getAllPetsFromDB();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Pets retrieved successfully",
    data: result,
  });
});

const getPetById = catchAsync(async (req, res) => {
  const result = await PetService.getPetByIdFromDB(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Pet retrieved successfully",
    data: result,
  });
});

const updatePet = catchAsync(async (req, res) => {

  const result = await PetService.updatePetIntoDB(req.body, req);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Pet updated successfully",
    data: result,
  });
});
export const PetController = {
  createPet,
  getPet,
  getPetById,
  updatePet,
};
```

### `pets.route.ts`
```ts
import express from "express";
import { PetController } from "./pets.controller";
import { fileUploader } from "../../../helpers/fileUploader";
import { parseBodyData } from "../../middlewares/parseBodyData";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { PetValidationSchema } from "./pets.validation";
const router = express.Router();

router.post(
  "/create",
  auth(),
  fileUploader.upload.single("petImage"),
  parseBodyData,
  PetController.createPet,
);

router.get("/", auth(), PetController.getPet);
router.get("/:id", auth(), PetController.getPetById);
router.patch(
  "/:id",
  auth(),
  fileUploader.upload.single("petImage"),
  parseBodyData,
  validateRequest(PetValidationSchema.updatePetValidationSchema),
  PetController.updatePet,
);

export const PetRoute = router;
```

### `petApi.hurl`
```hurl
GET {{baseUrl}}/pets
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDIzMjNjZWZjYTgyMzM5OTBiMTNiOSIsImVtYWlsIjoibXVob21tb2RzaGFoamFsYWxAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE3NTg2MDkzOTQsImV4cCI6MTc1OTkwNTM5NH0.GdsQiDJxAEk_GvAaCgAVonqvmji-QrId6VS4ucw8AHw




GET {{baseUrl}}/pets/68d3c97366697eb785bd145f
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDIzMjNjZWZjYTgyMzM5OTBiMTNiOSIsImVtYWlsIjoibXVob21tb2RzaGFoamFsYWxAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE3NTg2MDkzOTQsImV4cCI6MTc1OTkwNTM5NH0.GdsQiDJxAEk_GvAaCgAVonqvmji-QrId6VS4ucw8AHw



GET {{baseUrl}}//

POST {{baseUrl}}/pets/create
Content-Type: application/json

{
  "petName": "Whiskers",
  "petType": "Cat",
  "petAge": 3,
  "userId": "68d277c7895b8b7fcc30399e",
  "weight":2
}



POST {{baseUrl}}/products
Content-Type: application/json

{
  "name": "Rice Cooker",
  "price": 3000,
  "description": "This is a product",
  "sellerId": "68ca50ed1768bf9be41c45db"
}


POST {{baseUrl}}/products
Content-Type: application/json

{
  "name": "Iron Machine",
  "price": 500,
  "description": "This is Iron Machine",
  "sellerId": "68ca50ed1768bf9be41c45db"
}


PATCH {{baseUrl}}/pets/68d3c97366697eb785bd145f
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDNjN2RiOTY4YmJjMDFiMTAzNTZkZiIsImVtYWlsIjoibWlyLmRldmVsb3Blci5oYXNhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTc1OTEzNTgxOCwiZXhwIjoxNzYwNDMxODE4fQ.5hGAyjms6H8j15abKw2bW7wvrcZXMGtuu2t_KimI0C0

Content-Type: application/json

{
  "petName": "Whiskers "
}
```

### `pets.validation.ts`
```ts
//
import { ObjectId } from "mongodb";
import { z } from "zod";

const createPetValidationSchema = z.object({
  petName: z.string().min(2).max(100),
  petType: z.enum(["Cat", "Dog", "Bird"]),
  petAge: z.number().int(),
  userId: z.string().refine((v) => ObjectId.isValid(v), "Invalid ObjectId"),
});

const updatePetValidationSchema = z
  .object({
    petType: z.enum(["Dog", "Cat", "Bird"]).optional(),
    petName: z.string().min(2).max(100).optional(),
    petAge: z.string().optional(),
    weight: z.string().optional(),
  })
  .strict();
export const PetValidationSchema = {
  createPetValidationSchema,
  updatePetValidationSchema,
};
```
