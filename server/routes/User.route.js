import express from "express";
import {
  fetchAuthorById,
  Login,
  logout,
  Signup,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/logout", logout);
router.get("/author/:author_id", fetchAuthorById);

export default router;
