import { Router } from "express";
import { fetchData } from "./crawler";
import { updateDatabaseDaily } from "./updateDaily";
// import data from "../tests/testData_13_12_23.js";
const router = Router();

router.get("/crops", async (req, res) => {
	try {
		const data = await fetchData();

		let update = await updateDatabaseDaily(data);
		res.send(update);
	} catch (e) {
		console.error(e);
		res.status(500).send("Internal Server Error");
	}
});

router.get("/crops/:id", async (req, res) => {});

router.put("/crops/:id", async (req, res) => {});

router.post("/crops", async (req, res) => {});

export default router;
