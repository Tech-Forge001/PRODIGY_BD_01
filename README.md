# PRODIGY_BD_01
# 🚀 Basic REST API with CRUD Operations (Node.js + Express)

This project is a simple **REST API** built using **Node.js** and **Express** that demonstrates basic **CRUD (Create, Read, Update, Delete)** operations.  
It uses an **in-memory storage** (JavaScript object) instead of a database.

---

## 📂 Project Structure
```
crud-api/
│-- app.js          # Main server file
│-- package.json    # Project metadata & dependencies
│-- .gitignore      # Ignored files (node_modules, .env, etc.)
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Tech-Forge001/crud-api-nodejs.git
   cd crud-api-nodejs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the server**
   ```bash
   node app.js
   ```
   Server will start at:  
   👉 `http://localhost:5000`

---

## 🔗 API Endpoints

### 1. Create User
**POST** `/users`  
**Body (JSON):**
```json
{
  "name": "Alice",
  "email": "alice@example.com",
  "age": 22
}
```

### 2. Get All Users
**GET** `/users`

### 3. Get Single User
**GET** `/users/:id`

### 4. Update User
**PUT** `/users/:id`  
**Body (JSON):**
```json
{
  "name": "Aastha Updated",
  "email": "aastha.@fordger.com"
}
```

### 5. Delete User
**DELETE** `/users/:id`

---

## 📬 Testing with Postman
You can test the API using **Postman** or **cURL**.  
A ready-made Postman collection is provided here:  
👉 [crud_api_postman_collection.json](./crud_api_postman_collection.json)

---

## 🛠 Built With
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [UUID](https://www.npmjs.com/package/uuid) (for unique IDs)

---

## 👩‍💻 Author
- Aastha Pathak 
- 📧 aasthapathak324@gmail.com
- 🌐(https://github.com/Tech-Forge001)

---


