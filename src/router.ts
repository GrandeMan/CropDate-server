import { Router } from "express";
import { cacheCrops, cacheRates } from "./cache";

const router = Router();

router.get("/crops", async (req, res) => {
	try {
		// Fetch cached crops or fetch from database if cache is empty
		const crops = await cacheCrops();

		res.status(200).json(crops);
	} catch (e) {
		console.error("Error getting crops from database", e);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

router.get("/crops/:id", async (req, res) => {});

router.get("/currency", async (req, res) => {
	try {
		// Fetch cached rates or fetch from database if cache is empty
		const rates = await cacheRates();

		res.status(200).json(rates);
	} catch (e) {
		console.error("Error getting rates from database", e);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

router.post("/crops", async (req, res) => {});

export default router;
