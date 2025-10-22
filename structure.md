# 📁 Project Structure

```bash
.
├── bun.lock
├── credential.md
├── developer.md
├── module.js
├── newfile.md
├── package.json
├── package-lock.json
├── pr
│   └── basic
│       ├── map.js
│       ├── promiseAllAsyncAwait.js
│       ├── promiseAllFailureIndividually.js
│       ├── promiseAll.js
│       ├── promiseAllWithFailure.js
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
│   │   │   │   ├── refractorSubscriptionplanPrompt.md
│   │   │   │   ├── subscriptionplanApi.hurl
│   │   │   │   ├── subscriptionplan.controller.ts
│   │   │   │   ├── subscriptionplan.interface.ts
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

29 directories, 126 files

```
