import express from "express";
import {
  fetchAuthorByName,
  Login,
  logout,
  Signup,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/logout", logout);
router.get("/author/:author_name", fetchAuthorByName);

export default router;
