import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

// Les chemins définis ici seront préfixés par "/api/auth" automatiquement
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
