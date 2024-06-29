import express from "express";
import { getSales } from "../controllers/sales.js";
import { verifyTokey } from "../middleware/auth.js";

const router = express.Router();

router.get("/sales", verifyToken, getSales);

export default router;
