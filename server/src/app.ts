import express from "express";
import cors from "cors";

import authRoutes from "./modules/auth/auth.routes";




const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "OK" });
});

export default app;
