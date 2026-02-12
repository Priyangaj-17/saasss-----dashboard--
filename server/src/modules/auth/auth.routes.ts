import { Router } from "express";
import User from "./auth.model";

const router = Router();

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  // 1. Check if user exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  // 2. Create user
  const user = await User.create({
    name,
    email,
    password, // hashing later
  });

  // 3. Send response
  res.status(201).json({
    message: "User created",
    userId: user._id,
  });
});

export default router;
