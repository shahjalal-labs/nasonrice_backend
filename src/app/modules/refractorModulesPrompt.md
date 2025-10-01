You are a **senior full-stack developer**.

## 📌 Task

You are given a real-world code module located at:

```
/home/sj/web/flo_backend/src/app/modules
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- ✅ Clear separation of concerns
- ✅ Consistent, semantic naming conventions
- ✅ Modular architecture (hooks, services, utils, components)
- ✅ Scalable file/folder structure
- ✅ Industry-standard project layout and architecture
- ✅ Readable, testable, production-grade code
- ✅ 100% behavior and API compatibility

👉 Output the refactored code to a new folder: `modules_refactored`

Also return a `.sh` script that will:
- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved modules version`

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
├── prisma
│   └── schema.prisma
├── README.md
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
│   │   │   ├── payment
│   │   │   │   ├── paymentApi.hurl
│   │   │   │   ├── payment.controller.ts
│   │   │   │   ├── payment.routes.ts
│   │   │   │   ├── payment.service.ts
│   │   │   │   └── payment.validation.ts
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

21 directories, 83 files
```

## 📁 Target Module Tree (modules)

```bash
/home/sj/web/flo_backend/src/app/modules
├── auth
│   ├── authApi.hurl
│   ├── auth.controller.ts
│   ├── auth.routes.ts
│   ├── auth.service.ts
│   └── auth.validation.ts
├── booking
│   ├── bookingApi.hurl
│   ├── booking.controller.ts
│   ├── booking.route.ts
│   ├── booking.service.ts
│   └── booking.validation.ts
├── payment
│   ├── paymentApi.hurl
│   ├── payment.controller.ts
│   ├── payment.routes.ts
│   ├── payment.service.ts
│   └── payment.validation.ts
├── pets
│   ├── petApi.hurl
│   ├── pets.controller.ts
│   ├── pets.route.ts
│   ├── pets.service.ts
│   └── pets.validation.ts
├── product
│   ├── productApi.hurl
│   ├── product.controller.ts
│   ├── product.route.ts
│   ├── product.service.ts
│   └── product.validation.ts
└── user
    ├── userApi.hurl
    ├── user.controller.ts
    ├── user.route.ts
    ├── user.services.ts
    └── user.validation.ts

7 directories, 30 files
```

## 📄 Module Files & Contents

### `auth/auth.service.ts`
```ts
//w: (start)╭──────────── create new user with otp verification ────────────╮

//w: (end) ╰──────────── create new user with otp verification ────────────╯

// prisma chatgpt reference: https://chatgpt.com/share/68ce35fd-296c-800c-98ee-55228af26de8
import prisma from "../../../shared/prisma";
import bcrypt from "bcryptjs";
import ApiError from "../../../errors/ApiErrors";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import config from "../../../config";
import { User } from "@prisma/client";
import generateOTP from "../../../helpers/generateOtp";
import sendEmail from "../../../helpers/sendEmail";
import redisClient from "../../../helpers/redis";
import { uploadInSpace } from "../../../helpers/uploadInSpace";
import { Request } from "express";

//w: (start)╭──────────── user auth login ────────────╮
// user auth login
const loginUserIntoDB = async (payload: {
  email: string;
  password: string;
  fcmToken: string;
}) => {
  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const isPasswordValid = await bcrypt.compare(
    payload.password,
    user?.password,
  );

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid credentials");
  }

  await prisma.user.update({
    where: {
      email: payload.email,
    },
    data: {
      fcmToken: payload.fcmToken,
    },
  });

  const accessToken = jwtHelpers.generateToken(
    { id: user.id, email: user.email, role: user.role },
    config.jwt.jwt_secret as string,
    config.jwt.expires_in as string,
  );

  return {
    accessToken,
  };
};

//w: (end) ╰──────────── user auth login ────────────╯

//google login
/* const googleLogin = async (payload: {
  email: string;
  fullName: string;
  fcmToken: string;
}) => {
  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (user) {
    const accessToken = jwtHelpers.generateToken(
      { id: user.id, email: user.email, role: user.role },
      config.jwt.jwt_secret as string,
      config.jwt.expires_in as string,
    );
    return {
      accessToken,
    };
  }

  const newUser = await prisma.user.create({
    data: {
      email: payload.email,
      // firstName: payload,
      password: "",
      fcmToken: payload.fcmToken,
    },
  });

  const accessToken = jwtHelpers.generateToken(
    { id: newUser.id, email: newUser.email, role: newUser.role },
    config.jwt.jwt_secret as string,
    config.jwt.expires_in as string,
  );

  return {
    accessToken,
  };
}; */

// update or add user location in Redis using GEO
//w: (start)╭──────────── userLocationUpdateInRedis ────────────╮
const userLocationUpdateInRedis = async (
  userId: string,
  userLocation: { longitude: number; latitude: number },
) => {
  const redisGeoKey = "userLocations"; // you can keep all users under one key

  // Use GEOADD to store location
  await redisClient.geoAdd(redisGeoKey, {
    longitude: userLocation.longitude,
    latitude: userLocation.latitude,
    member: userId,
  });

  return;
};

//w: (end) ╰──────────── userLocationUpdateInRedis  ────────────╯

//w: (start)╭──────────── sendForgotPasswordOtpCode  ────────────╮
const sendForgotPasswordOtpDB = async (email: string) => {
  const existringUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!existringUser) {
    throw new ApiError(404, "User not found");
  }
  // Generate OTP and expiry time
  const otp = generateOTP(); // 4-digit OTP
  const subject = "Your Password Reset OTP";
  const html = `
     <div style="font-family: Arial, sans-serif; color: #333;">
       <h2>Password Reset Request</h2>
       <p>Hi <b>${existringUser.firstName + " " + existringUser.lastName}</b>,</p>
       <p>Your OTP for password reset is:</p>
       <h1 style="color: #007BFF;">${otp}</h1>
       <p>This OTP is valid for <b>5 minutes</b>. If you did not request this, please ignore this email.</p>
       <p>Thanks, <br>The Support Team</p>
     </div>
   `;
  await sendEmail(email, subject, html);
  await redisClient.set(`otp:${email}`, otp, { EX: 300 });

  return otp;
};
//w: (end) ╰──────────── sendForgotPasswordOtpCode ────────────╯
//
//w: (start)╭──────────── verify otp code ────────────╮
// verify otp code
const verifyForgotPasswordOtpCodeDB = async (payload: {
  email: string;
  otp: string;
}) => {
  const { email, otp } = payload;

  const user = await prisma.user.findUnique({ where: { email: email } });
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const userId = user.id;

  const savedOtp = await redisClient.get(`otp:${email}`);
  if (!savedOtp) {
    throw new ApiError(400, "Invalid or expired OTP.");
  }

  if (otp !== savedOtp) {
    throw new ApiError(401, "Invalid OTP.");
  }

  // 2️⃣ Delete OTP from Redis after successful verification
  await redisClient.del(`otp:${email}`);

  const forgetToken = jwtHelpers.generateToken(
    { id: userId, email },
    config.jwt.jwt_secret as string,
    config.jwt.expires_in as string,
  );

  return { forgetToken };
};

//w: (end) ╰──────────── verify otp code ────────────╯
//
//w: (start)╭──────────── reset password ────────────╮
// reset password
const resetForgotPasswordDB = async (newPassword: string, userId: string) => {
  const existingUser = await prisma.user.findUnique({ where: { id: userId } });
  if (!existingUser) {
    throw new ApiError(404, "user not found");
  }
  const email = existingUser.email as string;
  const hashedPassword = await bcrypt.hash(
    newPassword,
    Number(config.jwt.gen_salt),
  );

  await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      password: hashedPassword,
    },
  });
  return;
};
//w: (end) ╰──────────── reset password ────────────╯
//
//
//w: (start)╭──────────── get profile for logged in user ────────────╮
// get profile for logged in user
const myProfile = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      Pet: true,
    },
  });
  if (!user) {
    throw new ApiError(404, "user not found!");
  }
  return user;
};
//w: (end) ╰──────────── get profile for logged in user ────────────╯
//

// update user profile only logged in user
const updateProfileIntoDB = async (
  userId: string,
  userData: User,
  file: Express.Multer.File,
) => {
  // restrict updating password, status, role
  if (["password", "status", "role"].some((key) => key in userData))
    throw new ApiError(400, "You can't update this field");

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    throw new ApiError(404, "user not found for edit user");
  }
  let profileImage;
  if (file) {
    profileImage = await uploadInSpace(file, "users/profileImage");
  }
  await prisma.user.update({
    where: { id: userId },
    data: {
      ...userData,
      profileImage: file ? profileImage : user.profileImage,
    },
  });

  return;
};

const changePasswordIntoDB = async (
  userId: string,
  currentPassword: string,
  newPassword: string,
) => {
  // const userId = req.user?.id;

  const existingUser = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!existingUser) {
    throw new ApiError(404, "user not found.");
  }

  const passwordAuthencity = await bcrypt.compare(
    currentPassword,
    existingUser.password,
  );

  if (!passwordAuthencity) {
    throw new ApiError(401, "Invalid password.");
  }

  const hashedPassword = await bcrypt.hash(
    newPassword,
    Number(config.jwt.gen_salt),
  );
  const result = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      password: hashedPassword,
    },
  });
  return result;
};

export const authService = {
  loginUserIntoDB,
  // googleLogin,
  myProfile,
  updateProfileIntoDB,
  userLocationUpdateInRedis,
  sendForgotPasswordOtpDB,
  verifyForgotPasswordOtpCodeDB,
  resetForgotPasswordDB,
  changePasswordIntoDB,
};
```

### `auth/auth.routes.ts`
```ts
import express from "express";
import { authController } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequest";
import { authValidation } from "./auth.validation";
import auth from "../../middlewares/auth";
import { fileUploader } from "../../../helpers/fileUploader";
import { parseBodyData } from "../../middlewares/parseBodyData";

const router = express.Router();

router.post(
  "/login",
  validateRequest(authValidation.authLoginSchema),
  authController.loginUser,
);
router.post(
  "/google-login",
  validateRequest(authValidation.googleLoginSchema),
  // authController.googleLogin,
);
// with authorization
router.get("/profile", auth(), authController.myProfile);
//  without authorization
// router.get("/profile", authController.myProfile);
router.patch(
  "/update/user-location",
  auth(),
  validateRequest(authValidation.locationUpdateSchema),
  authController.userLocationUpdateInRedis,
);
router.post(
  "/send-otp",
  validateRequest(authValidation.sendForgotPasswordOtpValidationSchema),
  authController.sendForgotPasswordOtp,
);
router.post("/verify-otp", authController.verifyForgotPasswordOtpCode);
router.patch("/reset-password", auth(), authController.resetPassword);
router.patch(
  "/profile",
  auth(),
  fileUploader.profileImage,
  parseBodyData,
  (r, s, n) => {
    console.log(`hitting`);
    n();
  },
  validateRequest(authValidation.updateProfileSchema),
  authController.updateProfile,
);

router.patch(
  "/change-password",
  auth(),
  validateRequest(authValidation.changePasswordValidationSchema),
  authController.changePassword,
);

export const authRoute = router;
```

### `auth/auth.validation.ts`
```ts
import { z } from "zod";

const authLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const googleLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  fullName: z.string().min(1, "Full Name is required"),
  fcmToken: z.string().min(1, "FCM token is required"),
});

const locationUpdateSchema = z.object({
  latitude: z
    .number()
    .min(-90, "Latitude must be greater than or equal to -90")
    .max(90, "Latitude must be less than or equal to 90"),
  longitude: z
    .number()
    .min(-180, "Longitude must be greater than or equal to -180")
    .max(180, "Longitude must be less than or equal to 180"),
});

const updateProfileSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters long")
      .optional(),
    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters long")
      .optional(),
    phoneNumber: z
      .string()
      .min(5, "Mobile must be at least 10 characters long")
      .optional(),
    nationality: z.string().optional(),
  })
  .strict();

const sendForgotPasswordOtpValidationSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const changePasswordValidationSchema = z.object({
  currentPassword: z.string(),
  newPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character",
    ),
});
export const authValidation = {
  updateProfileSchema,
  authLoginSchema,
  googleLoginSchema,
  locationUpdateSchema,
  sendForgotPasswordOtpValidationSchema,
  changePasswordValidationSchema,
};
```

### `auth/authApi.hurl`
```hurl
#------//----------// LOGIN EXISTING USER ------//----------//

POST {{baseUrl}}/auth/login
Content-Type:application/json

{
 "email": "mir.developer.hasan@gmail.com",
 "password": "Test@123",
 "fcmToken": "fcm_token_example_12345"
}

#------//----------// LOGIN EXISTING USER ------//----------//

#------//----------// LOGIN EXISTING USER ------//----------//
POST {{baseUrl}}/auth/login
Content-Type:application/json

{
 "email": "mir.developer.hasan@gmail.com",
 "password": "Test@123",
 "fcmToken": "token"
}

#------//----------// LOGIN EXISTING USER ------//----------//


#
#
#
#------//----------//  Get  logged in user profile------//----------//
GET {{baseUrl}}/auth/profile
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDIzMjNjZWZjYTgyMzM5OTBiMTNiOSIsImVtYWlsIjoibXVob21tb2RzaGFoamFsYWxAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE3NTg2MDkzOTQsImV4cCI6MTc1OTkwNTM5NH0.GdsQiDJxAEk_GvAaCgAVonqvmji-QrId6VS4ucw8AHw

#------//----------//  Get  logged in user profile------//----------//
#
#
#


# ============================================================
# =====================   LOGIN USER 1   =====================
# ============================================================

POST {{baseUrl}}/auth/login
Content-Type: application/json

{
  "email": "hasan.doe@example.com",
  "password": "Aa@123456",
  "fcmToken": null
}


# ============================================================
# =====================   LOGIN USER 2   =====================
# ============================================================

POST {{baseUrl}}/auth/login
Content-Type: application/json

{
  "email": "shahjalal.backend@gmail.com",
  "password": "Test@123",
  "fcmToken": "token"
}


# ============================================================
# ===============   GET LOGGED IN USER PROFILE   =============
# ============================================================

GET {{baseUrl}}/auth/profile
Authorization: <JWT_TOKEN>


# ============================================================
# ===============start   SEND FORGOT PASSWORD OTP =============

POST {{baseUrl}}/auth/send-otp

Content-Type: application/json
{
  "email": "mir.developer.hasan@gmail.com"
}

# ===============end   SEND FORGOT PASSWORD OTP ==============
# ============================================================


# ===============   verifyForgotPasswordOtpCode  =============
# ============================================================

POST {{baseUrl}}/auth/verify-otp

Content-Type: application/json
{
  "email": "mir.developer.hasan@gmail.com",
  "otp": "8417"
}


# ============================================================
# ===============   verifyForgotPasswordOtpCode  =============
# ============================================================
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4Y2U0Y2QwOGYyOWQ5YTUxNGVkZjc5YyIsImVtYWlsIjoic2hhaGphbGFsLmJhY2tlbmRAZ21haWwuY29tIiwiaWF0IjoxNzU4MzYzNTc3LCJleHAiOjE3NTk2NTk1Nzd9.3AVJAPMdwGp_AExfSaEuzs_PbrGRFwn7Wg5dEj9HahI

PATCH {{baseUrl}}/auth/reset-password

Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDNjN2RiOTY4YmJjMDFiMTAzNTZkZiIsImVtYWlsIjoibWlyLmRldmVsb3Blci5oYXNhbkBnbWFpbC5jb20iLCJpYXQiOjE3NTkxMjQyNjYsImV4cCI6MTc2MDQyMDI2Nn0.t3VPPIg0P6iYdMrcBgALkJZPEtjmsKpYAED2b0jUmNk

Content-Type: application/json

{
  "newPassword": "Test@123"
}


# ============================================================
# ===============   UPDATE PROFILE               =============
# ============================================================

PATCH {{baseUrl}}/auth/profile

Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDNjN2RiOTY4YmJjMDFiMTAzNTZkZiIsImVtYWlsIjoibWlyLmRldmVsb3Blci5oYXNhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTc1OTEyNDQwNSwiZXhwIjoxNzYwNDIwNDA1fQ.fMPWmJrnxykxj8v3OcN2J4jsTH9LNcQYY8kKyNLbNNU 

Content-Type: application/json

{
  "password": "Test@123updated"
}

# ============================================================
# ===============   UPDATE PROFILE               =============
# ============================================================





# ============================================================
# ===============   CHANGE-PASSWORD               =============
# ============================================================

PATCH {{baseUrl}}/auth/change-password

Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDRlNzgyMmE2ZDE4NzUyMTVkNGNmOCIsImVtYWlsIjoiaGFzYW4uZGV2ZWxvcGVyQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaWF0IjoxNzU4NzgzNTAwLCJleHAiOjE3NjAwNzk1MDB9.M8Gu3aAGdqxfcmKfN6WlmdXnBN7Fr3cVKJ4YlMgwKNg

Content-Type: application/json

{
  "currentPassword": "Test@123",
  "newPassword": "@1A123BCd"
}

# ============================================================
# ===============   CHANGE-PASSWORD              =============
# ============================================================

```

### `auth/auth.controller.ts`
```ts
import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { authService } from "./auth.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { uploadInSpace } from "../../../helpers/uploadInSpace";

//login user
const loginUser = catchAsync(async (req, res) => {
  const result = await authService.loginUserIntoDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User successfully logged in",
    data: result,
  });
});

//google login
/* const googleLogin = catchAsync(async (req, res) => {
  const result = await authService.googleLogin(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Google login has been successfull",
    data: result,
  });
}); */

//update user location
const userLocationUpdateInRedis = catchAsync(async (req, res) => {
  const { id } = req.user;
  await authService.userLocationUpdateInRedis(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Your location updated successfully",
  });
});

//send forgot password otp
const sendForgotPasswordOtp = catchAsync(
  async (req: Request, res: Response) => {
    const email = req.body.email as string;
    const response = await authService.sendForgotPasswordOtpDB(email);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "OTP send successfully",
      data: response,
    });
  },
);

// verify forgot password otp code
const verifyForgotPasswordOtpCode = catchAsync(
  async (req: Request, res: Response) => {
    const payload = req.body;
    const response = await authService.verifyForgotPasswordOtpCodeDB(payload);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "OTP verified successfully.",
      data: response,
    });
  },
);

// update forgot password
const resetPassword = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const { newPassword } = req.body;
  const result = await authService.resetForgotPasswordDB(newPassword, userId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Password updated successfully.",
    data: result,
  });
});

// get profile for logged in user
const myProfile = catchAsync(async (req, res) => {
  const { id } = req.user;
  const user = await authService.myProfile(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Your profile has been retrieved successfully",
    data: user,
  });
});

// update user profile only logged in user
const updateProfile = catchAsync(async (req, res) => {
  const { id } = req.user;
  const file = req.file as Express.Multer.File;
  let profileImage;
  if (file) {
    profileImage = await uploadInSpace(file, "users/profileImage");
  }

  await authService.updateProfileIntoDB(id, req.body, file);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Your profile has been updated successfully",
  });
});

const changePassword = catchAsync(async (req, res) => {
  const userId = req.user?.id;

  const currentPassword = req.body?.currentPassword;
  const newPassword = req.body?.newPassword;

  const result = await authService.changePasswordIntoDB(
    userId,
    currentPassword,
    newPassword,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Password changed successfully",
    data: result,
  });
});
export const authController = {
  loginUser,
  // googleLogin,
  myProfile,
  updateProfile,
  userLocationUpdateInRedis,
  sendForgotPasswordOtp,
  verifyForgotPasswordOtpCode,
  resetPassword,
  changePassword,
};
```

### `payment/payment.validation.ts`
```ts
import { z } from "zod";

const addmoneyValidationSchema = z.object({
  amount: z.number().positive(),
  paymentMethodId: z.string(),
});

export const PaymentValidation = {
  addmoneyValidationSchema,
};
```

### `payment/payment.routes.ts`
```ts
import express from "express";
import auth from "../../middlewares/auth";
import { paymentControllers } from "./payment.controller";
import validateRequest from "../../middlewares/validateRequest";
import { PaymentValidation } from "./payment.validation";

const router = express.Router();

router.post(
  "/onboarding/create-subscription",
  auth(),
  paymentControllers.createOnboarding,
);
/* router.post("/onboarding/create-plan", auth(), paymentControllers.createPlan);
router.post(
  "/onboarding/buy-subscription",
  auth(),
  paymentControllers.buySubscription
);
router.get("/wallet-balance", auth(), paymentControllers.myWalletBalance);
router.post("/withdraw-balance", auth(), paymentControllers.withdrawBalance);
router.get("/my-activity", auth(), paymentControllers.myPaymentActivity);
router.post("/add-money", auth(), paymentControllers.addMoney);
router.get("/my-balance", auth(), paymentControllers.myBalance);
 */

router.get("/my-balance", auth(), paymentControllers.myBalance);
router.post(
  "/add-money",
  auth(),
  validateRequest(PaymentValidation.addmoneyValidationSchema),
  paymentControllers.addMoney,
);

export const paymentRoutes = router;
```

### `payment/paymentApi.hurl`
```hurl
# shahjalal.backend@gmail.com onboarding

POST {{baseUrl}}/payments/onboarding/create-subscription
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDIxODI4ZWZjYTgyMzM5OTBiMTNiNyIsImVtYWlsIjoic2hhaGphbGFsLmJhY2tlbmRAZ21haWwuY29tIiwicm9sZSI6IkFkbWluIiwiaWF0IjoxNzU5MjA2NzMzLCJleHAiOjE3NjA1MDI3MzN9.yz0OCbaQtuFqe5dxU-rKGlopkM5lXfLRZCXwMOAWfg0 





# mir.developer.hasan@gmail.com onboarding

POST {{baseUrl}}/payments/onboarding/create-subscription
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDNjN2RiOTY4YmJjMDFiMTAzNTZkZiIsImVtYWlsIjoibWlyLmRldmVsb3Blci5oYXNhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTc1OTIwOTI2OCwiZXhwIjoxNzYwNTA1MjY4fQ.SrCuFtcV1Bb4LyUuum-cS4v-OcAI9z_7V3M6xIc9EYc 



# add money

POST {{baseUrl}}/payments/add-money

Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDNjN2RiOTY4YmJjMDFiMTAzNTZkZiIsImVtYWlsIjoibWlyLmRldmVsb3Blci5oYXNhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTc1OTIwOTI2OCwiZXhwIjoxNzYwNTA1MjY4fQ.SrCuFtcV1Bb4LyUuum-cS4v-OcAI9z_7V3M6xIc9EYc


Content-Type: application/json

{
  "amount": 300,
  "paymentMethodId": "pm_1SCxRBFQDM8OhwJHOgCS8Ve7"
}




# my balance


GET {{baseUrl}}/payments/my-balance
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDNjN2RiOTY4YmJjMDFiMTAzNTZkZiIsImVtYWlsIjoibWlyLmRldmVsb3Blci5oYXNhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTc1OTIwOTI2OCwiZXhwIjoxNzYwNTA1MjY4fQ.SrCuFtcV1Bb4LyUuum-cS4v-OcAI9z_7V3M6xIc9EYc
```

### `payment/payment.controller.ts`
```ts
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { paymentServices } from "./payment.service";

const createOnboarding = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const result = await paymentServices.createOnboarding(userId);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "success",
    data: result,
  });
});

/* const createPlan = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const result = await paymentServices.createPlan(userId, req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "success",
    data: result,
  });
});

const buySubscription = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const result = await paymentServices.buySubscription(userId, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Payment successfull",
    data: result,
  });
});

const myWalletBalance = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const result = await paymentServices.myWalletBalance(userId);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "My wallet balance retrive success",
    data: result,
  });
});

const withdrawBalance = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const result = await paymentServices.withdrawBalance(userId, req.body.amount);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "withdraw request send success",
    data: result,
  });
});

const myPaymentActivity = catchAsync(async (req, res) => {
  const result = await paymentServices.myPaymentActivity(req);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "my activity is retrived successfull",
    data: result,
  });
});



export const paymentControllers = {
  createOnboarding,
  createPlan,
  buySubscription,
  myWalletBalance,
  withdrawBalance,
  myPaymentActivity,
  addMoney,
  myBalance,
}; */

const addMoney = catchAsync(async (req, res) => {
  const userId = req.user.id;
  await paymentServices.addMoney(req.body, userId);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: `${req.body.amount / 100} USD has been added successfully.`,
  });
});

const myBalance = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const result = await paymentServices.myBalance(userId);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Your balance retrived successfully",
    data: result,
  });
});

export const paymentControllers = {
  createOnboarding,
  addMoney,
  myBalance,
};
```

### `payment/payment.service.ts`
```ts
import { Subscription } from "@prisma/client";
import stripe from "../../../config/stripe";
import ApiError from "../../../errors/ApiErrors";
import { onboardingHtml } from "../../../helpers/onboardingHtml";
import sendEmail from "../../../helpers/sendEmail";
import prisma from "../../../shared/prisma";
import { paginationHelper } from "../../../shared/pagination";
import { Request } from "express";

const createOnboarding = async (userId: string) => {
  const userInfo = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      accountId: true,
    },
  });

  if (!userInfo) {
    throw new ApiError(404, "User not found");
  }

  const userEmail = userInfo.email;
  let accountId = userInfo.accountId;

  // Create a Stripe account if the user doesn't have one
  // it's seller account or connected account/ connected with admin account
  if (!accountId) {
    const account = await stripe.accounts.create({
      type: "express",
      country: "US",
      email: userEmail,
      capabilities: {
        transfers: { requested: true },
      },
    });

    if (!account) {
      throw new ApiError(500, "Failed to create Stripe account");
    }
    accountId = account.id;

    // Update the user's accountId in the database
    await prisma.user.update({
      where: { id: userId },
      data: { accountId },
    });
  }

  // Generate account link for onboarding
  const accountLink = await stripe.accountLinks.create({
    account: accountId,
    refresh_url: "https://your-platform.com/reauth",
    return_url: "https://your-platform.com/return",
    type: "account_onboarding",
  });

  // Prepare email content
  const html = await onboardingHtml({
    fullName: userInfo.firstName + " " + userInfo?.lastName,
    accountLink: accountLink.url,
  });

  // Send the onboarding email
  await sendEmail(userEmail, "Your Onboarding URL", html);

  return { accountId, accountLink };
};

/* const createPlan = async (
  userId: string,
  payload: {
    planName: string;
    amount: number;
    intervalCount: number;
    discount: number;
  },
) => {
  const { planName, amount, intervalCount = 1 } = payload;
  const userInfo = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      accountId: true,
    },
  });
  if (!userInfo || !userInfo.accountId) {
    throw new ApiError(
      404,
      "User not found or not connected to a Stripe account",
    );
  }

  const plans = await prisma.plan.findMany({
    where: {
      userId,
    },
  });

  if (plans.length === 4) {
    throw new ApiError(400, "You cannot create more plans");
  }

  // Create a Stripe product
  const product = await stripe.products.create(
    {
      name: planName,
    },
    {
      stripeAccount: userInfo.accountId, // Specify the connected account
    },
  );

  if (!product) {
    throw new ApiError(500, "Failed to create Stripe product");
  }

  // Create a Stripe price
  const price = await stripe.prices.create(
    {
      unit_amount: amount * 100, // Amount in cents (e.g., $10.00 -> 1000)
      currency: "usd", // e.g., 'usd'
      product: product.id,
      recurring: { interval: "month", interval_count: intervalCount },
    },
    {
      stripeAccount: userInfo.accountId, // Specify the connected account
    },
  );

  if (!price) {
    throw new ApiError(500, "Failed to create Stripe price");
  }

  const result = await prisma.plan.create({
    data: {
      ...payload,
      userId,
      priceId: price.id,
      connectedAccountId: userInfo.accountId,
    },
  });

  return result;
}; */

/* const buySubscription = async (userId: string, payload: Subscription) => {
  const { paymentMethodId, priceId } = payload;
  const plan = await prisma.plan.findFirst({
    where: {
      priceId: priceId,
    },
  });

  const connectedAccountId = plan?.connectedAccountId;

  const userInfo = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!userInfo) {
    throw new ApiError(404, "User not found");
  }

  const isExistSubscription = await prisma.subscription.findFirst({
    where: { priceId: payload.priceId },
  });

  if (isExistSubscription) {
    throw new ApiError(409, "You have already subscribed this plan");
  }

  let customerId = userInfo?.customerId;

  if (!customerId) {
    const customer = await stripe.customers.create(
      {
        email: userInfo.email,
      },
      { stripeAccount: connectedAccountId },
    );
    customerId = customer.id;
    await prisma.user.update({
      where: { id: userId },
      data: { customerId: customer.id },
    });
  }
  await stripe.paymentMethods.attach(
    paymentMethodId,
    {
      customer: customerId,
    },
    { stripeAccount: connectedAccountId },
  );

  await stripe.customers.update(
    customerId,
    {
      invoice_settings: { default_payment_method: paymentMethodId },
    },
    { stripeAccount: connectedAccountId },
  );

  let coupon;

  if (plan?.discount !== 0) {
    coupon = await stripe.coupons.create(
      {
        percent_off: plan?.discount,
        duration: "once",
      },
      { stripeAccount: connectedAccountId },
    );
  }

  const subscription: any = await stripe.subscriptions.create(
    {
      customer: customerId,
      items: [{ price: priceId }],
      discounts: coupon ? [{ coupon: coupon.id }] : undefined,
      expand: ["latest_invoice"],
      //   transfer_data: { //this for transer amount in other
      //     destination: connectedAccountId,
      //   },
    },
    { stripeAccount: connectedAccountId },
  );

  const subscriptionData = {
    paymentMethodId: paymentMethodId,
    userId: userId,
    priceId: priceId,
    subscriptionId: subscription.id,
    planName: subscription.plan.interval,
    connectedAccountId: connectedAccountId as string,
    discount: plan?.discount as number,
  };
  const createdSubscription = await prisma.subscription.create({
    data: subscriptionData,
  });

  return createdSubscription;
}; */

const myWalletBalance = async (userId: string) => {
  const userInfo = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      accountId: true,
    },
  });
  if (!userInfo) {
    throw new ApiError(404, "User not found!");
  }

  const balance = await stripe.balance.retrieve({
    stripeAccount: userInfo?.accountId as string,
  });
  const availableBalance = balance.available?.[0]?.amount || 0;
  const pendingBalance = balance.pending?.[0]?.amount || 0;
  const transactionsList = await stripe.balanceTransactions.list(
    { limit: 100 },
    { stripeAccount: userInfo.accountId as string },
  );
  const pastTransactionsTotal = transactionsList.data.reduce(
    (acc: any, txn: any) => acc + txn.amount,
    0,
  );
  const lastTransaction = transactionsList.data[0];
  return {
    availableBalance: userInfo.accountId ? availableBalance / 100 : 0,
    pendingBalance: userInfo.accountId ? pendingBalance / 100 : 0,
    pastTransactionsTotal: userInfo.accountId ? pastTransactionsTotal / 100 : 0,
    lastTransactionAmount: userInfo.accountId
      ? lastTransaction
        ? lastTransaction.amount / 100
        : 0
      : 0,
  };
};

const withdrawBalance = async (userId: string, amount: number) => {
  const userInfo = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      accountId: true,
    },
  });
  if (!userInfo) {
    throw new ApiError(404, "User not found!");
  }

  const balance = await stripe.balance.retrieve({
    stripeAccount: userInfo?.accountId as string,
  });

  const availableBalance = balance.available?.[0]?.amount || 0;

  if (availableBalance === 0) {
    throw new ApiError(400, "You have insufficient balance in your account");
  }

  const payout = await stripe.payouts.create(
    {
      amount: amount * 100,
      currency: "usd",
    },
    { stripeAccount: userInfo.accountId as string },
  );
  /*   await prisma.paymentActivity.create({
    data: {
      userId,
      amount,
      type: "Withdraw E-Wallet",
    },
  });
 */
  return payout;
};

/* const myPaymentActivity = async (req: Request) => {
  const userId = req.user.id;
  const { page, limit, take, skip } = paginationHelper(req.query as any);
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const activities = await prisma.paymentActivity.findMany({
    where: {
      userId,
    },
    orderBy: { createdAt: "desc" },
    take,
    skip,
  });

  const totalCount = await prisma.paymentActivity.count({
    where: {
      userId,
    },
  });

  const totalPages = Math.ceil(totalCount / limit);

  return {
    totalCount,
    totalPages,
    currentPage: page,
    activities,
  };
}; */

const addMoney = async (
  payload: {
    amount: number;
    paymentMethodId: string;
  },
  userId: string,
) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });
  if (!user) {
    throw new ApiError(404, "user not found");
  }
  let addMoneyCustomerId = user.addMoneyCustomerId;

  if (addMoneyCustomerId === null) {
    const customer = await stripe.customers.create({
      name: user.firstName + " " + user?.lastName,
      email: user.email,
    });
    addMoneyCustomerId = customer.id;

    await prisma.user.update({
      where: { id: userId },
      data: {
        addMoneyCustomerId: addMoneyCustomerId,
      },
    });
    await stripe.paymentMethods.attach(payload.paymentMethodId, {
      customer: addMoneyCustomerId,
    });
    await stripe.customers.update(addMoneyCustomerId, {
      invoice_settings: { default_payment_method: payload.paymentMethodId },
    });
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: payload.amount * 100,
    currency: "usd",
    payment_method: payload.paymentMethodId,
    customer: addMoneyCustomerId,
    confirm: true,
    description: `Add money to platform account. user:${user.firstName + " " + user?.lastName}`,
    automatic_payment_methods: {
      enabled: true,
      allow_redirects: "never",
    },
  });

  if (paymentIntent.status === "succeeded") {
    await prisma.paymentActivity.create({
      data: {
        amount: payload.amount,
        type: "Add money successfull",
        userId: userId,
      },
    });
  }

  return;
};

const myBalance = async (userId: string) => {
  const userInfo = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      // balance: true,
      totalPay: true,
    },
  });

  return userInfo;
};

export const paymentServices = {
  createOnboarding,
  // createPlan,
  // buySubscription,
  // myWalletBalance,
  // withdrawBalance,
  // myPaymentActivity,
  addMoney,
  myBalance,
};
```

### `product/product.service.ts`
```ts
import { Product } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";
import httpStatus from "http-status";
import { uploadInSpace } from "../../../helpers/uploadInSpace";
import { Request } from "express";

//w: (start)╭──────────── createProductIntoDB  ────────────╮
const createProductIntoDB = async (
  payload: Product,
  userId: string,
  req: Request,
) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };

  const processImages = async (
    files: Express.Multer.File[],

    folder: string,
  ) => {
    if (!files || files.length === 0) return null;

    return Promise.all(
      files.map((file) => uploadInSpace(file, `brand/class/${folder}`)),
    );
  };

  const [productUrls] = await Promise.all([
    processImages(files?.productUrls, "productUrls"),
  ]);

  if (!productUrls) {
    throw new ApiError(404, "Product images are required");
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!existingUser) {
    throw new ApiError(404, "User not found");
  }
  const result = await prisma.product.create({
    data: {
      ...payload,
      images: productUrls,
      userId: existingUser.id,
    },
  });
  return result;
};

//w: (end) ╰──────────── createProductIntoDB  ────────────╯

//
//w: (start)╭──────────── getAllProductsFromDB ────────────╮

const getAllProductsFromDB = async () => {
  const result = await prisma.product.findMany({
    include: {
      user: true,
    },
    omit: {
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};
//w: (end) ╰──────────── getAllProductsFromDB ────────────╯

//
//w: (start)╭──────────── deleteProductFromDB  ────────────╮

const deleteProductFromDB = async (productId: string) => {
  const existingProduct = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!existingProduct) {
    throw new ApiError(httpStatus.NOT_FOUND, "Product not found.");
  }
  await prisma.product.delete({
    where: {
      id: productId,
    },
  });
  return;
};
//w: (end) ╰──────────── deleteProductFromDB  ────────────╯

//
//w: (start)╭──────────── updateProductIntoDB   ────────────╮
const updateProductIntoDB = async (
  payload: any,
  productId: string,
  req: Request,
) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };

  const processImages = async (
    files: Express.Multer.File[],

    folder: string,
  ) => {
    if (!files || files.length === 0) return null;

    return Promise.all(
      files.map((file) => uploadInSpace(file, `brand/class/${folder}`)),
    );
  };

  const [productUrls] = await Promise.all([
    processImages(files?.productUrls, "productUrls"),
  ]);

  const existingProduct = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!existingProduct) {
    throw new ApiError(httpStatus.NOT_FOUND, "Product not found.");
  }

  const result = await prisma.product.update({
    where: {
      id: productId,
    },
    data: {
      ...payload,
      ...(productUrls?.length ? { images: productUrls } : {}),
    },
  });
  return result;
};
//
//w: (end) ╰──────────── updateProductIntoDB   ────────────╯

//w: (start)╭──────────── prduct details/getProductById  ────────────╮

const getProductByIdFromDB = async (productId: string) => {
  const result = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    omit: {
      createdAt: true,
      updatedAt: true,
    },
    include: {
      user: {
        select: {
          firstName: true,
          email: true,
        },
      },
    },
  });
  if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Product not found.");
  return result;
};
//w: (end) ╰──────────── prduct details/getProductById   ────────────╯

//w: (start)╭──────────── prduct details/getProductById  ────────────╮

//w: (end) ╰──────────── prduct details/getProductById   ────────────╯

export const ProductService = {
  createProductIntoDB,
  getAllProductsFromDB,
  deleteProductFromDB,
  updateProductIntoDB,
  getProductByIdFromDB,
};
```

### `product/product.controller.ts`
```ts
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ProductService } from "./product.service";

//w: (start)╭──────────── createProduct  ────────────╮
const createProduct = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const result = await ProductService.createProductIntoDB(
    req.body,
    userId,
    req,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product created successfully",
    data: result,
  });
});

//w: (end) ╰──────────── createProduct  ────────────╯

//w: (start)╭──────────── getAllProducts  ────────────╮

const getAllProducts = catchAsync(async (req, res) => {
  const result = await ProductService.getAllProductsFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "All products retrieved successfully",
    data: result,
  });
});
//w: (end) ╰──────────── getAllProducts  ────────────╯
//
//w: (start)╭──────────── updateProduct   ────────────╮
const updateProduct = catchAsync(async (req, res) => {
  const productId = req.params.id;
  const result = await ProductService.updateProductIntoDB(
    req.body,
    productId,
    req,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product updated successfully",
    data: result,
  });
});

//w: (end) ╰──────────── updateProduct   ────────────╯

//w: (start)╭──────────── createProductIntoDB  ────────────╮

const getProductById = catchAsync(async (req, res) => {
  const { id: productId } = req.params;

  const result = await ProductService.getProductByIdFromDB(productId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product retrieved successfully",
    data: result,
  });
});
//w: (end) ╰──────────── updateProduct   ────────────╯

//w: (start)╭──────────── delete product  ────────────╮

const deleteProduct = catchAsync(async (req, res) => {
  const { id: productId } = req.params;

  await ProductService.deleteProductFromDB(productId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product deleted successfully",
  });
});
//w: (end) ╰──────────── delete product   ────────────╯
export const ProductController = {
  createProduct,
  getAllProducts,
  updateProduct,
  getProductById,
  deleteProduct,
};
```

### `product/product.validation.ts`
```ts
//
import { z } from "zod";
const PetTypeEnum = z.enum(["Dog", "Cat", "Bird"]);
const createProductValidationSchema = z.object({
  name: z.string().min(2, { message: "Name is too short" }),
  price: z.number().positive({ message: "Price must be positive" }),
  description: z.string().min(5, { message: "Description is too short" }),
  // images: z.array(
  //   z.string().min(1, { message: "At least one image is required" }),
  // ),
  petType: z.array(PetTypeEnum).nonempty(),
  weight: z.string(),
  colorOptions: z.array(z.string()),
  suitableFor: z.array(z.string()),
  category: z.enum(["Food", "Toy", "Accessories"]),
  fastShipping: z.string().optional(),
  easyReturns: z.string().optional(),
  inStock: z.number(),
});

const updateProductValidationSchema = z.object({
  name: z.string().min(2, { message: "Name is too short" }).optional(),
  price: z
    .number()
    .positive({ message: "Price must be postive number." })
    .optional(),
  description: z
    .string()
    .min(5, { message: "Description is too short" })
    .optional(),
  petType: z.array(PetTypeEnum).nonempty().optional(),
  weight: z.string().optional(),
  colorOptions: z.array(z.string()).optional(),
  suitableFor: z.array(z.string()).optional(),
  category: z.enum(["Food", "Toy", "Accessories"]).optional(),
  fastShipping: z.string().optional(),
  easyReturns: z.string().optional(),
  inStock: z.number().optional(),
});

export const ProductValidation = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
```

### `product/productApi.hurl`
```hurl
# ============================================================
#(start) =========                  ===========
# ============================================================

# ============================================================
# (end)=========                  =============
# ============================================================

# ============================================================
#(start) =========   create product               ===========
# ============================================================
POST {{baseUrl}}/product/create
Content-Type: application/json
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDNjN2RiOTY4YmJjMDFiMTAzNTZkZiIsImVtYWlsIjoibWlyLmRldmVsb3Blci5oYXNhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTc1ODg2MTg1MSwiZXhwIjoxNzYwMTU3ODUxfQ.7gPbQL7sh9xZXwK_HUt-m25KJ2iWJqaI2oPE06cmyqA

{
  "name": "Whiskas Food Pouch Gravy",
  "price": 49.0,
  "description": "Tasty chicken gravy pouch suitable for cats and dogs.",
  "petType": ["Cat", "Dog"],
  "weight": "85g",
  "colorOptions": ["Purple", "Yellow"],
  "suitableFor": ["Kittens", "Adult Cats"],
  "category": "Food",
  "fastShipping": "Available",
  "inStock": 30,
  "easyReturns": "30-day return policy"
}

# ============================================================
# (end)=========   create product               =============
# ============================================================



# ============================================================
#(start) =========   getAllProducts   ===========
# ============================================================

GET {{baseUrl}}/product
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDNjN2RiOTY4YmJjMDFiMTAzNTZkZiIsImVtYWlsIjoibWlyLmRldmVsb3Blci5oYXNhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTc1ODg2MTg1MSwiZXhwIjoxNzYwMTU3ODUxfQ.7gPbQL7sh9xZXwK_HUt-m25KJ2iWJqaI2oPE06cmyqA


# ============================================================
# (end)=========   getAllProducts             =============
# ============================================================


# ============================================================
#(start) =========   getProductById             ===========
# ============================================================

GET {{baseUrl}}/product/68d61b29cfc03eee791f544c
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDNjN2RiOTY4YmJjMDFiMTAzNTZkZiIsImVtYWlsIjoibWlyLmRldmVsb3Blci5oYXNhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTc1ODg2MTg1MSwiZXhwIjoxNzYwMTU3ODUxfQ.7gPbQL7sh9xZXwK_HUt-m25KJ2iWJqaI2oPE06cmyqA

# ============================================================
# (end)=========   getProductById             =============
# ============================================================

# ============================================================
#(start) =========    updateProduct              ===========
# ============================================================

PATCH {{baseUrl}}/product/update/68d61cd4cc33be832823128b
Content-Type: application/json
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDNjN2RiOTY4YmJjMDFiMTAzNTZkZiIsImVtYWlsIjoibWlyLmRldmVsb3Blci5oYXNhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTc1ODg2MTg1MSwiZXhwIjoxNzYwMTU3ODUxfQ.7gPbQL7sh9xZXwK_HUt-m25KJ2iWJqaI2oPE06cmyqA
{
  "price": 900
}

# ============================================================
# (end)=========     updateProduct  =============
# ============================================================



# ============================================================
#(start) =========   create product               ===========
# ============================================================

POST {{baseUrl}}/product/create
Content-Type: application/json
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDNjN2RiOTY4YmJjMDFiMTAzNTZkZiIsImVtYWlsIjoibWlyLmRldmVsb3Blci5oYXNhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTc1ODg2MTg1MSwiZXhwIjoxNzYwMTU3ODUxfQ.7gPbQL7sh9xZXwK_HUt-m25KJ2iWJqaI2oPE06cmyqA

{
  "name": "Purina Pro Plan Dental Chew Sticks",
  "price": 32.99,
  "description": "Dental health chew sticks that help reduce tartar and freshen breath for dogs.",
  "petType": ["Dog"],
  "weight": "500g",
  "colorOptions": ["Green", "Brown"],
  "suitableFor": ["Adult Dogs", "Senior Dogs"],
  "category": "Toy",
  "fastShipping": "Available",
  "inStock": 30,
  "easyReturns": "30-day return policy"
}

# ============================================================
# (end)=========   delete product               =============
# ============================================================

DELETE {{baseUrl}}/product/68d61cd4cc33be832823128b
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDNjN2RiOTY4YmJjMDFiMTAzNTZkZiIsImVtYWlsIjoibWlyLmRldmVsb3Blci5oYXNhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTc1ODg2MTg1MSwiZXhwIjoxNzYwMTU3ODUxfQ.7gPbQL7sh9xZXwK_HUt-m25KJ2iWJqaI2oPE06cmyqA

# ============================================================
#(start) =========  delete product                ===========
# ============================================================

# ============================================================
# (end)=========                  =============
# ============================================================

```

### `product/product.route.ts`
```ts
//
import express from "express";
import { ProductValidation } from "./product.validation";
import validateRequest from "../../middlewares/validateRequest";
import { ProductController } from "./product.controller";
import auth from "../../middlewares/auth";
import { fileUploader } from "../../../helpers/fileUploader";
import { parseBodyData } from "../../middlewares/parseBodyData";
const router = express.Router();
router.post(
  "/create",
  auth(),
  fileUploader.uploadMultiple,
  parseBodyData,
  validateRequest(ProductValidation.createProductValidationSchema),
  ProductController.createProduct,
);
router.patch(
  "/update/:id",
  auth(),
  fileUploader.uploadMultiple,
  parseBodyData,
  validateRequest(ProductValidation.updateProductValidationSchema),
  ProductController.updateProduct,
);
router.get("/", auth(), ProductController.getAllProducts);
router.get("/:id", auth(), ProductController.getProductById);
router.delete("/:id", auth(), ProductController.deleteProduct);
export const ProductRoute = router;
```

### `user/user.services.ts`
```ts
//w: ╭──────────── Block Start ────────────╮

//w: ╰───────────── Block End ─────────────╯

//w: (start)╭──────────── create new user with otp verification ────────────╮

//w: (end) ╰──────────── create new user with otp verification ────────────╯

import { User } from "@prisma/client";
import ApiError from "../../../errors/ApiErrors";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";
import prisma from "../../../shared/prisma";
import generateOTP from "../../../helpers/generateOtp";
import sendEmail from "../../../helpers/sendEmail";
import redisClient from "../../../helpers/redis";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import config from "../../../config";
//p: AUTH SERVICE INTERPRET WITH CHATGPT: https://chatgpt.com/share/68ce4ed1-9374-800c-8299-01a5d9b0dec8
//

//w: (start)╭──────────── create new user with otp verification ────────────╮
//create new user with otp verification
const createUser = async (payload: User) => {
  const existingUser = await prisma.user.findFirst({
    where: { email: payload.email },
  });
  if (existingUser) {
    throw new ApiError(409, "email already exist!");
  }

  const hashedPassword = await bcrypt.hash(payload.password as string, 10);

  // Prepare pending user object
  const pendingUserData = {
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    password: hashedPassword,
    nationality: payload.nationality,
    fcmToken: payload.fcmToken,
  };

  // Save pending user in Redis (store as JSON string)
  await redisClient.set(
    `pendingUser:${payload.email}`,
    JSON.stringify(pendingUserData),
    { EX: 300 }, // Optional: expire after 5 minutes if you want
  );

  // Generate OTP and expiry time
  const otp = generateOTP(); // 4-digit OTP
  const subject = "Your Password Reset OTP";
  const html = `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2>Password Reset Request</h2>
      <p>Hi <b>${payload.firstName + " " + payload.lastName}</b>,</p>
      <p>Your OTP for password reset is:</p>
      <h1 style="color: #007BFF;">${otp}</h1>
      <p>This OTP is valid for <b>5 minutes</b>. If you did not request this, please ignore this email.</p>
      <p>Thanks, <br>The Support Team</p>
    </div>
  `;
  await sendEmail(payload.email, subject, html);
  await redisClient.set(`otp:${payload.email}`, otp, { EX: 300 });

  return otp;
};

//w: (end) ╰──────────── create new user with otp verification ────────────╯
//
//w: (Start)╭────────────  create new user without otp verification ────────────╮
// create new user without otp verification
const createUserIntoDB = async (payload: User) => {
  const existingUser = await prisma.user.findFirst({
    where: { email: payload.email },
  });

  if (existingUser) {
    throw new ApiError(409, "email already exist!");
  }

  const hashedPassword = await bcrypt.hash(payload.password as string, 10);

  const user = await prisma.user.create({
    data: {
      ...payload,

      password: hashedPassword,

      // stripeCustomerId: stripeAccount.id,
    },
  });
  const accessToken = jwtHelpers.generateToken(
    { id: user.id, email: user.email, role: user.role },

    config.jwt.jwt_secret as string,

    config.jwt.expires_in as string,
  );

  const { password, ...sanitizedUser } = user;

  return {
    accessToken,

    user: sanitizedUser,
  };
};
//w:(end)╰───────────── create new user without otp verification ─────────────╯

//w: (start)╭──────────── Verify user using OTP for signup ────────────╮
// Verify user using OTP for signup
const signupVerification = async (payload: { email: string; otp: string }) => {
  const { email, otp } = payload;

  // 1️⃣ Fetch OTP from Redis
  const savedOtp = await redisClient.get(`otp:${email}`);
  if (!savedOtp) {
    throw new ApiError(400, "Invalid or expired OTP.");
  }

  // 2️⃣ Compare OTP
  if (otp !== savedOtp) {
    throw new ApiError(401, "Invalid OTP.");
  }

  // 3️⃣ Fetch pending user data from Redis
  const pendingUserStr = await redisClient.get(`pendingUser:${email}`);
  if (!pendingUserStr) {
    throw new ApiError(404, "No pending user found. Please sign up again.");
  }
  const pendingUser = JSON.parse(pendingUserStr);

  // 4️⃣ Create new user inside DB transaction
  await prisma.$transaction(async (tx) => {
    const createdUser = await tx.user.create({
      data: pendingUser,
    });

    return createdUser;
  });

  // 5️⃣ Clean up Redis data after successful user creation
  await Promise.all([
    redisClient.del(`otp:${email}`),
    redisClient.del(`pendingUser:${email}`),
  ]);

  return;
};
//w: (end) ╰──────────── Verify user using OTP for signup ────────────╯

//
//w: (start)╭──────────── get single user ────────────╮
//get single user
const getSingleUser = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      Pet: {
        omit: {
          createdAt: true,
          updatedAt: true,
        },
      },
    },
    omit: {
      createdAt: true,
      updatedAt: true,
    },
  });
  if (!user) {
    throw new ApiError(404, "user not found!");
  }

  const { password, ...sanitizedUser } = user;
  return sanitizedUser;
};

//w: (end) ╰──────────── get single user ────────────╯

//
//w: (start)╭──────────── get all users ────────────╮
const getUsers = async () => {
  const users = await prisma.user.findMany({
    include: {
      Pet: {
        orderBy: {
          petAge: "asc",
        },
        select: {
          petName: true,
        },
      },
    },
  });
  if (users.length === 0) {
    throw new ApiError(404, "Users not found!");
  }
  const sanitizedUsers = users.map((user) => {
    const { password, ...sanitizedUser } = user;
    return sanitizedUser;
  });
  return sanitizedUsers;
};

//w: (end) ╰──────────── get all users ────────────╯
//

//w: (start)╭──────────── update user ────────────╮
const updateUser = async (id: string, userData: any) => {
  if (userData?.role || userData?.status) {
    throw new ApiError(403, "You can't update role and status");
  }
  if (!ObjectId.isValid(id)) {
    throw new ApiError(400, "Invalid user ID format");
  }
  const existingUser = await getSingleUser(id);
  if (!existingUser) {
    throw new ApiError(404, "user not found for edit user");
  }
  const updatedUser = await prisma.user.update({
    where: { id },
    data: userData,
  });

  const { password, ...sanitizedUser } = updatedUser;

  return sanitizedUser;
};

//w: (end) ╰──────────── update user ────────────╯

//
//w: (start)╭──────────── deleteUser ────────────╮
const deleteUser = async (userId: string, loggedId: string) => {
  if (!ObjectId.isValid(userId)) {
    throw new ApiError(400, "Invalid user ID format");
  }

  if (userId === loggedId) {
    throw new ApiError(403, "You can't delete your own account!");
  }
  const existingUser = await getSingleUser(userId);
  if (!existingUser) {
    throw new ApiError(404, "user not found for delete this");
  }
  await prisma.user.delete({
    where: { id: userId },
  });
  return;
};
//w: (end) ╰──────────── deleteUser ────────────╯

export const userService = {
  createUser,
  createUserIntoDB,
  signupVerification,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
```

### `user/user.controller.ts`
```ts
//
import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { userService } from "./user.services";

// create user without otp email verification
const CreateUser = catchAsync(async (req, res) => {
  const result = await userService.createUserIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "User created successfully",
    data: result,
  });
});
//
// register user with otp email verification
const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.createUser(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Check your email for signup verification",
    data: result,
  });
});

// signup verification
const signupVerification = catchAsync(async (req, res) => {
  const result = await userService.signupVerification(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "OTP verification successful",
    data: result,
  });
});

//get users
const getUsers = catchAsync(async (req: Request, res: Response) => {
  const users = await userService.getUsers();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "users retrived successfully",
    data: users,
  });
});

//get single user
const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const user = await userService.getSingleUser(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "user retrived successfully",
    data: user,
  });
});

//update user
const updateUser = catchAsync(async (req: Request, res: Response) => {
  const updatedUser = await userService.updateUser(req.params.id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "user updated successfully",
    data: updatedUser,
  });
});

//delete user
const deleteUser = catchAsync(async (req: any, res: Response) => {
  const userId = req.params.id;
  const loggedId = req.user.id;
  await userService.deleteUser(userId, loggedId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "user deleted successfully",
  });
});

export const UserControllers = {
  CreateUser,
  createUser,
  signupVerification,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
```

### `user/user.route.ts`
```ts
import express from "express";
import { UserControllers } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { userValidation } from "./user.validation";
import { UserRole } from "@prisma/client";
import auth from "../../middlewares/auth";

const router = express.Router();

// create user with otp email verification
router.post(
  "/create",
  validateRequest(userValidation.userRegisterValidationSchema),
  UserControllers.createUser,
);

// create user without otp email verification
router.post(
  "/create-user",
  validateRequest(userValidation.userCreateValidationSchema),
  UserControllers.CreateUser,
);
router.post(
  "/signup-verification",
  validateRequest(userValidation.verificationSchema),
  UserControllers.signupVerification,
);

// router.get("/", auth(UserRole.Admin), UserControllers.getUsers);
router.get("/", auth(), UserControllers.getUsers);
router.get("/:id", auth(), UserControllers.getSingleUser);
// update role and user status (active, block, deleted)
router.patch(
  "/admin-update",
  validateRequest(userValidation.userUpdateValidationSchema),
  auth(UserRole.Admin),
  UserControllers.updateUser,
);

router.patch(
  "/:id",
  validateRequest(userValidation.userUpdateValidationSchema),
  // auth(UserRole.Admin),
  UserControllers.updateUser,
);
router.delete("/:id", auth(UserRole.Admin), UserControllers.deleteUser);
// Route
export const userRoutes = router;
```

### `user/user.validation.ts`
```ts
//
import { z } from "zod";
const fileSchema = z
  .object({
    originalname: z.string(),
    mimetype: z.string(),
    size: z.number(),
    buffer: z.instanceof(Buffer).optional(),
  })
  .refine(
    (file) => ["image/jpeg", "image/png", "image/jpg"].includes(file.mimetype),
    "Only JPG, JPEG, or PNG files are allowed",
  )
  .refine(
    (file) => file.size <= 5 * 1024 * 1024,
    "File size must be less than 5MB",
  );
const userRegisterValidationSchema = z.object({
  firstName: z.string().min(2, "Full name must be at least 2 characters long"),
  lastName: z.string().optional(),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character",
    ),
  nationality: z.string().optional(),
  fcmToken: z.string().optional(),
});

const verificationSchema = z.object({
  email: z.string().min(10, "Phone Number min 10 Digit"),
  otp: z.string().min(4, "OTP must be at least 4 characters long"),
});

const userUpdateValidationSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters long")
    .optional(),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters long")
    .optional(),
  nationality: z.string().optional(),
  phoneNumber: z.string().optional(),
});

const userCreateValidationSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character",
    ),
});

export const userValidation = {
  userRegisterValidationSchema,
  verificationSchema,
  userUpdateValidationSchema,
  userCreateValidationSchema,
};
```

### `user/userApi.hurl`
```hurl
# (START) ==========   (START) ==========

# (END)   ==========   (END)   ==========


# ========== GET All Users   (START) ==========

GET {{baseUrl}}/users
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YzkzY2M3MzVkNDAzNzBlMDY0NGZkYiIsImVtYWlsIjoiamFuZS5kb2VAZXhhbXBsZS5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTc1ODAyMDA3NywiZXhwIjoxNzU5MzE2MDc3fQ.lASuKtS7IcDZU4HJPlALjn4in4jGZc94S7N5gvbH_Is

# ========== GET All Users  (END)   ==========


# (START) ==========  CREATE USER WITH OTP EMAIL VERIFICATION (START) ==========

POST {{baseUrl}}/users/create
Content-Type: application/json

{
 "firstName": "Hasan",
  "lastName": "Bin Ali",
  "email": "hasan.developer@gmail.com",
  "password": "Test@123" 
}

# (END) ========== CREATE USER WITH OTP EMAIL VERIFICATION  (END)   ==========


# (START) ==========  SIGNUP VERIFICATION (START) ==========

POST {{baseUrl}}/users/signup-verification
Content-Type: application/json

{
  "email": "hasan.developer@gmail.com",
  "otp": "1565"
}

# (END)   ==========  SIGNUP VERIFICATION (END)   ==========



# (START) ==========  GET SINGLE USER (START) ==========

GET http://localhost:5002/api/v1/users/68d220acefca8233990b13b8
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDIxODI4ZWZjYTgyMzM5OTBiMTNiNyIsImVtYWlsIjoic2hhaGphbGFsLmJhY2tlbmRAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE3NTg1OTk2MjksImV4cCI6MTc1OTg5NTYyOX0.pElN8R-WT9MnL4T66i_pmRTkR-8jepQhmPTe2kdEbN0

# (END)   ==========  GET SINGLE USER (END)   ==========


# (START) ==========  GOOGLE-LOGIN (START) ==========
POST http://localhost:5002/api/v1/auth/google-login
Content-Type: application/json

{
  "email": "sadman.doe@example.com",
  "role":"Seller",
  "fullName": "Jane Doe",
  "fcmToken": "abc123xyz456"
}
# (END)   ==========  GOOGLE-LOGIN (END)   ==========



# (START) ========== DELETE USER   (START) ==========

DELETE {{baseUrl}}/users/68d220acefca8233990b13b8
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDIxODI4ZWZjYTgyMzM5OTBiMTNiNyIsImVtYWlsIjoic2hhaGphbGFsLmJhY2tlbmRAZ21haWwuY29tIiwicm9sZSI6IkFkbWluIiwiaWF0IjoxNzU4NjA1NTE1LCJleHAiOjE3NTk5MDE1MTV9.iyeZ7gXirMGY-hx3lwHo5lb4A3L6I91kAVxiKxpP9Uc

# (END)   ==========  DELETE USER  (END)   ==========


# (START) ========== UPDATE USER (START) ==========
PATCH {{baseUrl}}/users/68d2323cefca8233990b13b9
Content-Type: application/json

{
  "firstName": "David",
  "lastName": "Harrol",
  "profileImage": "url"
}
# (END)   ========== UPDATE USER (END)   ==========

```

### `booking/booking.route.ts`
```ts
//
import express from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { BookingValidation } from "./booking.validation";
import { BookingController } from "./booking.controller";
const router = express.Router();

router.post(
  "/create",
  auth(),
  validateRequest(BookingValidation.createBookingValidationSchema),
  BookingController.createBooking,
);

export const BookingRoute = router;
```

### `booking/booking.service.ts`
```ts
//
import { Booking } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createBookingIntoDB = async (payload: Booking) => {
  const result = await prisma.booking.create({
    data: {
      ...payload,
    },
  });
  return result;
};

export const BookingService = {
  createBookingIntoDB,
};
```

### `booking/booking.controller.ts`
```ts
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BookingService } from "./booking.service";

const createBooking = catchAsync(async (req, res) => {
  const result = await BookingService.createBookingIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Booking created successfully",
    data: result,
  });
});

export const BookingController = {
  createBooking,
};
```

### `booking/booking.validation.ts`
```ts
//

import { z } from "zod";

const createBookingValidationSchema = z.object({
  productId: z.string(),
  // userId: z.string(),
  qunatity: z.number().positive(),
  paymentId: z.string().optional(),
});

export const BookingValidation = {
  createBookingValidationSchema,
};
```

### `pets/pets.service.ts`
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

### `pets/pets.controller.ts`
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

### `pets/pets.route.ts`
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

### `pets/petApi.hurl`
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

### `pets/pets.validation.ts`
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
