import express from "express";
import {
  AuthorBlogs,
  CategoryBlogs,
  createBlog,
  DeleteBlog,
  fetchBlog,
  fetchBlogById,
  UpdateBlog,
} from "../controllers/Blogs.controller.js";

const router = express.Router();

router.post("/create", createBlog);
router.get("/delete/:_id", DeleteBlog);
router.post("/update", UpdateBlog);
router.get("/fetch", fetchBlog);
router.get("/myblogs/:author_id", AuthorBlogs);
//test them all
router.get("/category/:category_name", CategoryBlogs);
router.get("/fetch/:id", fetchBlogById);

export default router;
