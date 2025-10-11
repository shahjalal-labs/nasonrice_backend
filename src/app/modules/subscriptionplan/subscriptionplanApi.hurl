
GET {{baseUrl}}/subscriptionplans


GET {{baseUrl}}/subscriptionplans/68e9c14fcde613d1fdac1688




POST {{baseUrl}}/subscriptionplans/create
Content-Type: application/json


  {
    "name": "Platinum Plan",
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


DELETE {{baseUrl}}/subscriptionplans/:id
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDIzMjNjZWZjYTgyMzM5OTBiMTNiOSIsImVtYWlsIjoibXVob21tb2RzaGFoamFsYWxAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE3NTg2MDkzOTQsImV4cCI6MTc1OTkwNTM5NH0.GdsQiDJxAEk_GvAaCgAVonqvmji-QrId6VS4ucw8AHw


