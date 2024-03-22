import express from "express";
import { Login, logout, Signin } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signin", Signin);
router.post("/login", Login);
router.get("/logout", logout);

export default router;
