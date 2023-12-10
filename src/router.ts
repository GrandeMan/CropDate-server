import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/crops", async (req, res) => {
	// res.json(await prisma.crop.findMany());
	res.json({ message: "path works" });
});

router.get("/crops/:id", async (req, res) => {});

router.put("/crops/:id", async (req, res) => {});

router.post("/crops", async (req, res) => {});

export default router;
