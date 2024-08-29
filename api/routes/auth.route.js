import express from "express"
import { google, signing, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup)
router.post("/signin", signing)
router.post("/google", google)

export default router