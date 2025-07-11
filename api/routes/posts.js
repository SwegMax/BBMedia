import express from "express";
import { getPost, addPost } from "../controllers/post.js";

const router = express.Router();

router.get("/", getPost);
router.post("/", addPost);

export default router;