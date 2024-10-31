import express from "express";
import createPost from "../controllers/create_post.js";

const router = express.Router();

router.post("/", createPost);

export default router;
