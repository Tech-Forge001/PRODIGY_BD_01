// app.js
const express = require("express");
const { v4: uuidv4 } = require("uuid"); // for unique IDs
const validator = require("validator"); // for email validation

const app = express();
app.use(express.json());

// In-memory storage (HashMap/JS object)
let users = {};

// ✅ CREATE User
app.post("/users", (req, res) => {
  const { name, email, age } = req.body;

  // Input validation
  if (!name || !email || !age) {
    return res.status(400).json({ error: "Name, email, and age are required" });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  const id = uuidv4();
  users[id] = { id, name, email, age };

  res.status(201).json({ message: "User created successfully", user: users[id] });
});

// ✅ READ All Users
app.get("/users", (req, res) => {
  res.json(Object.values(users));
});

// ✅ READ Single User by ID
app.get("/users/:id", (req, res) => {
  const user = users[req.params.id];
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
});

// ✅ UPDATE User
app.put("/users/:id", (req, res) => {
  const { name, email, age } = req.body;
  const user = users[req.params.id];

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  if (email && !validator.isEmail(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // Update only provided fields
  users[req.params.id] = {
    ...user,
    name: name || user.name,
    email: email || user.email,
    age: age || user.age,
  };

  res.json({ message: "User updated successfully", user: users[req.params.id] });
});

// ✅ DELETE User
app.delete("/users/:id", (req, res) => {
  if (!users[req.params.id]) {
    return res.status(404).json({ error: "User not found" });
  }
  delete users[req.params.id];
  res.json({ message: "User deleted successfully" });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
