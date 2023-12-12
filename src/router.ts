import { Router } from "express";

const router = Router();

router.get("/crops", async (req, res) => {
	res.send();
});

router.get("/crops/:id", async (req, res) => {});

router.put("/crops/:id", async (req, res) => {});

router.post("/crops", async (req, res) => {});

export default router;
