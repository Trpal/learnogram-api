import express from "express";
import User from "../models/User";

const router = express.Router();

router.get("/", (req, res) => {
	res.json({ user: "teppo" });
});

export default router;
