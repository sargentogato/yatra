import express from "express";
import createPost from "../controllers/create_post";

const router = express.Router();

router.post("/", createPost);

export default router;
