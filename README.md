# AlgoStack Problem Service

This microservice is part of the **AlgoStack** platform, responsible for managing the lifecycle of algorithmic problems, including their test cases and solutions. It is built using Node.js and follows a clean **Repository-Service-Controller (RSC)** architecture for scalability and maintainability.

---

## 🧩 Features

- Add and manage coding problems
- Add associated test cases and solutions
- Structured backend using Repository-Service-Controller pattern

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- dotenv

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

---

### 🔧 Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rushikeshwaghmare07/algostack-problem-service.git
   ```

2. **Navigate to the project folder:**

   ```bash
   cd algostack-problem-service
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Create a `.env` file in the root directory and add the following:**

   ```bash
   PORT=3000
   ATLAS_DB_URL=mongodb://127.0.0.1:27017/
   LOG_DB_URL=mongodb://127.0.0.1:27017/
   NODE_NEV=development
   ```

5. **Start the development server:**

   ```bash
   npm run dev
   ```

---

## 📁 Project Structure (RSC Pattern)

```bash
AlgoCode-Problem-Service/
├── controllers/         # Handles HTTP requests/responses
├── services/            # Business logic layer
├── repositories/        # Database interaction layer
├── models/              # Mongoose schemas
├── routes/              # API routes
├── config/              # Configurations (e.g., DB, env, logger)
├── index.js               # Main Express app setup
├── .env                 # Environment variables
└── package.json         # Project metadata and scripts
```
---

## 📌 Scripts

- npm run dev – Start the server in development mode

- npm start – Start the server in production mode

--- 
## How routing is working in the project

- /api/v1/problems/ping

  - because the routes starts with /api

    /api -> /v1 -> /problems -> /ping

    apiRouter -> v1Router -> problemRouter -> problemController -> service layer
