# 📁 Project Structure

```bash
.
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

24 directories, 88 files

```
