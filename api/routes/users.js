import express from "express";
import { getUser } from "../controllers/user.js"; //add .js if it doesnt work

const router = express.Router()

router.get("/find/:userId", getUser)

export default router