POST {{baseUrl}}/product/create
Content-Type: application/json
Authorization: yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YzkzY2M3MzVkNDAzNzBlMDY0NGZkYiIsImVtYWlsIjoiamFuZS5kb2VAZXhhbXBsZS5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTc1ODAyMDA3NywiZXhwIjoxNzU5MzE2MDc3fQ.lASuKtS7IcDZU4HJPlALjn4in4jGZc94S7N5gvbH_Is

{
  "name": "Whiskas Food Pouch Gravy",
  "price": 49.0,
  "description": "Tasty chicken gravy pouch suitable for cats and dogs.",
  "images": [
    "https://example.com/images/whiskas-front.png",
    "https://example.com/images/whiskas-back.png"
  ],
  "petType": ["Cat", "Dog"],
  "weight": "85g",
  "colorOptions": ["Purple", "Yellow"],
  "suitableFor": ["Kittens", "Adult Cats"],
  "category": "Food",
  "fastShipping": "Available",
  "easyReturns": "30-day return policy"
}

