import express from "express";
import { protectRoute } from "../middleware/protect.Route.js";
import { sendMessage } from "../controllers/message.controller.js";


const router = express.Router();

router.post("/send/:id", protectRoute,sendMessage);

export default router;