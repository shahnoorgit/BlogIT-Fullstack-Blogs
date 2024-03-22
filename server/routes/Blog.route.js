import express from "express";
import { createBlog } from "../controllers/Blogs.controller.js";

const router = express.Router();

router.get("/", createBlog);

export default router;
