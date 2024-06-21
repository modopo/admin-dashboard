import express from "express";
import { getAdmins, getUswerPerformance } from "../controllers/management.js";

const router = express.Router();

router.get("/admins", getAdmins);
router.get("/perforamce/:id", getUserPerformance);

export default router;
