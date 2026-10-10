# ✈️ Nason Rice Air — Pet Aviation Transport & Flight Dispatch API

![Architecture Banner](./assets/banner.svg)

<p align="center">
  <a href="https://www.postman.com/shahjalal-backend-9458759/shahjalal-api-portfolio/collection/48491387-5d0e84f0-6cde-4afe-8231-abe0bb6d83ed" target="_blank">
    <img src="https://run.pstmn.io/button.svg" alt="View in Postman" />
  </a>
  <a href="https://www.postman.com/shahjalal-backend-9458759/shahjalal-api-portfolio/collection/48491387-5d0e84f0-6cde-4afe-8231-abe0bb6d83ed" target="_blank">
    <img src="https://img.shields.io/badge/Postman-Instant_Live_API_Docs-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Live API Documentation" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Aviation_API-8B5CF6?style=for-the-badge&logo=navigation&logoColor=white" alt="Aviation_API" />
  
</p>

---

## 📌 Executive Overview

Nason Rice Air specializes in luxury pet air travel coordination, airport manifest dispatching, vet health record compliance, flight leg reservations, and recurring pet concierge memberships.

---

## 🚀 Key Architectural Highlights

- **Flight Leg Scheduling**: Multi-airport itinerary generation with pet capacity validation per cabin.
- **Pet Health Compliance**: Vaccination verification, crate size certification, and vet clearance logs.
- **Membership Plans**: Tiered concierge subscriptions for frequent flying pet owners.
- **Airport Hub Directory**: Global IATA airport specifications and pet relief station data.
- **Stripe Payment Integration**: Secure reservation deposit holds and concierge billing.

---

## 📬 API Documentation & Interactive Postman Collection

The complete REST API specification is published in our public Postman showcase workspace:

* 🌐 **Instant Live API Documentation**: [Explore nasonrice_backend in Postman (Instant Web View)](https://www.postman.com/shahjalal-backend-9458759/shahjalal-api-portfolio/collection/48491387-5d0e84f0-6cde-4afe-8231-abe0bb6d83ed)
* 📁 **Local Postman File**: [`docs/postman_collection.json`](./docs/postman_collection.json) (import directly into Postman Desktop or Newman CLI).

### Core Endpoint Modules

| Module | Base Route | Key Capabilities |
|---|---|---|
| **Authentication** | `/api/v1/user` | Passenger profile, contact telemetry, traveler identity |
| **Flights** | `/api/v1/flightbooking` | Flight search, cabin pet seat reservation, itinerary management |
| **Pets** | `/api/v1/pets` | Pet profiles, breed, weight, medical records, crate measurements |
| **Airports** | `/api/v1/airports` | Airport database, terminal facilities, pet quarantine rules |
| **Subscriptions** | `/api/v1/subscriptionplan` | Concierge membership tiers and automated renewal |

---

## 📂 Project Architecture

```plaintext
nasonrice_backend/
├── assets/
│   └── banner.svg               # Project architecture visual banner
├── docs/
│   └── postman_collection.json  # Full Postman API collection v2.1
├── src/
│   ├── app/
│   │   ├── middlewares/         # Global error handlers, auth & validation guards
│   │   ├── modules/             # Domain-driven feature modules
│   │   └── routes/              # Centralized route aggregator
│   ├── config/                  # Environment & external service configurations
│   └── server.ts                # Application bootstrapper & HTTP server
├── prisma/
│   └── schema.prisma            # Database schema definition
├── .env.example                 # Sanitized environment template
├── package.json
└── tsconfig.json
```

---

## 🛠️ Quickstart & Local Setup

### Prerequisites
* **Node.js**: `v20.x` or higher
* **Database**: MongoDB or PostgreSQL (as specified in `schema.prisma`)

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/shahjalal-labs/nasonrice_backend.git
cd nasonrice_backend
npm install
```

### 2. Environment Configuration
Copy the provided `.env.example` file to create your local `.env`:
```bash
cp .env.example .env
```

### 3. Initialize Prisma Client
```bash
npx prisma generate
```

### 4. Run Development Server
```bash
npm run dev
```

---

## 👨‍💻 Engineering & Authorship

Developed and maintained by **Md. Shahjalal**.

* **GitHub**: [@shahjalal-labs](https://github.com/shahjalal-labs)
* **Email**: [muhommodshahjalal@gmail.com](mailto:muhommodshahjalal@gmail.com)

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).
