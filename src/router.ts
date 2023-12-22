import { Router } from "express";
import { cacheCrops, cacheRates, clearCache } from "./cache";
import { fetchCropData } from "./crawler";
import { updateDatabaseDaily } from "./updateDaily";

const router = Router();

router.get("/crops", async (req, res) => {
	try {
		// Fetch cached crops or fetch from database if cache is empty
		const ready = await cacheCrops();
		// let data = await fetchCropData();
		// let ready = await updateDatabaseDaily(data);

		res.status(200).json(ready);
	} catch (e) {
		console.error("Error getting crops from database", e);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

router.get("/crops/:id", async (req, res) => {
	try {
		// Fetch cached crops or fetch from database if cache is empty
		const crops = await cacheCrops();
		const crop = await crops.find(
			(crop) => crop.id === parseInt(req.params.id)
		);

		if (!crop) {
			res.status(404).json({ error: "Crop not found" });
		}

		res.status(200).json(crop);
	} catch (e) {
		console.error("Error getting crops from database", e);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

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

export default router;
