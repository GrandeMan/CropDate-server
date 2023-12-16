import { Router } from "express";

const router = Router();

router.get("/crops", async (req, res) => {
	try {
		res.status(200).json({
			message: "Data has been updated, proceeding to update database.",
		});
	} catch (e) {
		console.error("Error in fetch/update CRON job", e);
	}
});

router.get("/crops/:id", async (req, res) => {});

router.put("/crops/:id", async (req, res) => {});

router.post("/crops", async (req, res) => {});

export default router;
