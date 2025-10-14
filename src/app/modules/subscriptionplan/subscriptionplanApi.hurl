# get all subscription plans
GET {{baseUrl}}/subscriptionplans


# get subscription plan by id
GET {{baseUrl}}/subscriptionplans/68e9c14fcde613d1fdac1688




# create subscription plan

POST {{baseUrl}}/subscriptionplans/create
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDNjN2RiOTY4YmJjMDFiMTAzNTZkZiIsImVtYWlsIjoibWlyLmRldmVsb3Blci5oYXNhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTc1OTEyNDQwNSwiZXhwIjoxNzYwNDIwNDA1fQ.fMPWmJrnxykxj8v3OcN2J4jsTH9LNcQYY8kKyNLbNNU 

Content-Type: application/json
{
  "title": "Platinum Plan",
  "amount": 35,
  "type": "subscription",
  "interval":"year",
  "subscriptionTitleType":"YEARLY",
  "features": [
    "Access to premium content",
    "Priority customer support",
    "Unlimited downloads"
  ]
}


# update subscription plan
PATCH {{baseUrl}}/subscriptionplans/68e9c14fcde613d1fdac1688

Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDNjN2RiOTY4YmJjMDFiMTAzNTZkZiIsImVtYWlsIjoibWlyLmRldmVsb3Blci5oYXNhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTc1OTEyNDQwNSwiZXhwIjoxNzYwNDIwNDA1fQ.fMPWmJrnxykxj8v3OcN2J4jsTH9LNcQYY8kKyNLbNNU 

Content-Type: application/json

{
  "price": 0
}


# delete subscription plan
DELETE {{baseUrl}}/subscriptionplans/68edc77391384340ee77bb0f
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDNjN2RiOTY4YmJjMDFiMTAzNTZkZiIsImVtYWlsIjoibWlyLmRldmVsb3Blci5oYXNhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTc1OTEyNDQwNSwiZXhwIjoxNzYwNDIwNDA1fQ.fMPWmJrnxykxj8v3OcN2J4jsTH9LNcQYY8kKyNLbNNU 



# create subscription
POST {{baseUrl}}/subscriptionplans/create-subscription/price_1SH0YB9nrMVeASAleDglXxPa
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDNjN2RiOTY4YmJjMDFiMTAzNTZkZiIsImVtYWlsIjoibWlyLmRldmVsb3Blci5oYXNhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTc2MDQzMDg4MiwiZXhwIjoxNzYxNzI2ODgyfQ.FznwF49bAWM1qAGdFlU2Rf6orKOFZIHgyCN5CxlUZ0I  

Content-Type: application/json

{
  "paymentMethodId": "pm_1SI0t69nrMVeASAlWVEBYl2Y"
}


# update subscription status
PATCH {{baseUrl}}/subscriptionplans/update-status
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDNjN2RiOTY4YmJjMDFiMTAzNTZkZiIsImVtYWlsIjoibWlyLmRldmVsb3Blci5oYXNhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTc2MDQzMDg4MiwiZXhwIjoxNzYxNzI2ODgyfQ.FznwF49bAWM1qAGdFlU2Rf6orKOFZIHgyCN5CxlUZ0I 

Content-Type: application/json

{
  "priceId": "price_1SH0YB9nrMVeASAleDglXxPa",
  "status": "DEACTIVE"
}


# cancel subscription
PATCH {{baseUrl}}/subscriptionplans/cancel-subscription
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDNjN2RiOTY4YmJjMDFiMTAzNTZkZiIsImVtYWlsIjoibWlyLmRldmVsb3Blci5oYXNhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTc2MDQzMDg4MiwiZXhwIjoxNzYxNzI2ODgyfQ.FznwF49bAWM1qAGdFlU2Rf6orKOFZIHgyCN5CxlUZ0I 


