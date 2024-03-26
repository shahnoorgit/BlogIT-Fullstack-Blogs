import express from "express";
import { Login, logout, Signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/logout", logout);

export default router;
