## get all bookings
GET {{baseUrl}}/booking
Authorization:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDNjN2RiOTY4YmJjMDFiMTAzNTZkZiIsImVtYWlsIjoibWlyLmRldmVsb3Blci5oYXNhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTc1ODg2MTg1MSwiZXhwIjoxNzYwMTU3ODUxfQ.7gPbQL7sh9xZXwK_HUt-m25KJ2iWJqaI2oPE06cmyqA 



# create booking

POST {{baseUrl}}/booking/create

Authorization:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDNjN2RiOTY4YmJjMDFiMTAzNTZkZiIsImVtYWlsIjoibWlyLmRldmVsb3Blci5oYXNhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTc1ODg2MTg1MSwiZXhwIjoxNzYwMTU3ODUxfQ.7gPbQL7sh9xZXwK_HUt-m25KJ2iWJqaI2oPE06cmyqA

Content-Type: application/json

{
  "productId": "68d75c02eb7e8c7b524a0f43",
  "quantity": 2,
  "paymentMethodId":"pm_1SDjpi9nrMVeASAlkl0Vz4Og"
}

