const express = require("express");
const {
  createBlog,
  getBlogs,
  getBlog,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogController");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

// All routes in this file are protected
router.use(requireAuth);

// GET all Blogs
router.get("/", getBlogs);

//GET a single Blog
router.get("/:id", getBlog);

// POST a new Blog
router.post("/", createBlog);

// DELETE a Blog
router.delete("/:id", deleteBlog);

// UPDATE a Blog
router.patch("/:id", updateBlog);

module.exports = router;
