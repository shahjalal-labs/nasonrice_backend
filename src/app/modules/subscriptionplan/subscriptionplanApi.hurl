
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


PATCH {{baseUrl}}/subscriptionplans/68e9c8dccde613d1fdac168b

Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDIzMjNjZWZjYTgyMzM5OTBiMTNiOSIsImVtYWlsIjoibXVob21tb2RzaGFoamFsYWxAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE3NTg2MDkzOTQsImV4cCI6MTc1OTkwNTM5NH0.GdsQiDJxAEk_GvAaCgAVonqvmji-QrId6VS4ucw8AHw
Content-Type: application/json

{
  "name": "Updated Subscriptionplan"
}


DELETE {{baseUrl}}/subscriptionplans/:id
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDIzMjNjZWZjYTgyMzM5OTBiMTNiOSIsImVtYWlsIjoibXVob21tb2RzaGFoamFsYWxAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE3NTg2MDkzOTQsImV4cCI6MTc1OTkwNTM5NH0.GdsQiDJxAEk_GvAaCgAVonqvmji-QrId6VS4ucw8AHw


