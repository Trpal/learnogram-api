import express from "express";
import Resource from "../models/Resource";

const router = express.Router();

router.get("/", (req, res) => {
	Resource.find({}).then(resources => res.json({ resources }));
});

export default router;
