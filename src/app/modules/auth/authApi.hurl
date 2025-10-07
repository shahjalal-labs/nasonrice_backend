#------//----------// LOGIN EXISTING USER ------//----------//

POST {{baseUrl}}/auth/login
Content-Type:application/json

{
 "email": "shahjalal.backend@gmail.com",
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

