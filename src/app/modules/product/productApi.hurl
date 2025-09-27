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
#(start) =========    updateProduct              ===========
# ============================================================

PATCH {{baseUrl}}/product/update/68d61cd4cc33be832823128b
Content-Type: application/json
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDNjN2RiOTY4YmJjMDFiMTAzNTZkZiIsImVtYWlsIjoibWlyLmRldmVsb3Blci5oYXNhbkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImlhdCI6MTc1ODg2MTg1MSwiZXhwIjoxNzYwMTU3ODUxfQ.7gPbQL7sh9xZXwK_HUt-m25KJ2iWJqaI2oPE06cmyqA
{
  "price": 500
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
  "images": [
    "https://example.com/images/purina-dental-front.jpg",
    "https://example.com/images/purina-dental-side.jpg"
  ],
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
# (end)=========   create product               =============
# ============================================================
