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
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDIzMjNjZWZjYTgyMzM5OTBiMTNiOSIsImVtYWlsIjoibXVob21tb2RzaGFoamFsYWxAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE3NTg2MDkzOTQsImV4cCI6MTc1OTkwNTM5NH0.GdsQiDJxAEk_GvAaCgAVonqvmji-QrId6VS4ucw8AHw

Content-Type: application/json

{
  "Name": "Whiskers updated"
}
