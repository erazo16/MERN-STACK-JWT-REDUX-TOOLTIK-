import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv"
dotenv.config()

mongoose.connect(
  "mongodb+srv://juanesteban:0EV8WfWDDamAKlvQ@marketplacemern.kema1yl.mongodb.net/?retryWrites=true&w=majority&appName=marketplaceMERN"
);

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000!!!");
});

app.use("/api/user/", userRouter);
app.use("/api/auth/", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
