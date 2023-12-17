import { prisma } from "./prismaClient";

let cache: any[] = null;

export async function cacheCrops() {
	try {
		if (cache !== null) {
			console.log("Using cached crops");
			return cache;
		}

		const crops = await prisma.crop.findMany({
			include: {
				volumes: {
					take: 1,
					orderBy: {
						date: "desc",
					},
				},
				prices: {
					take: 1,
					orderBy: {
						date: "desc",
					},
				},
			},
		});
		const formattedCrops = crops.map((crop) => ({
			id: crop.id,
			category: crop.category,
			commodity: crop.commodity,
			date: crop.volumes[0]?.date,
			volume: crop.volumes[0]?.volume,
			price: crop.prices[0]?.price,
			market: crop.prices[0]?.market,
		}));

		cache = formattedCrops;
		console.log("Crops cached");
		return cache;
	} catch (e) {
		console.error("Error getting crops from database", e);
		throw new Error("Error getting crops from database");
	}
}

export function clearCache() {
	console.log("Crops cache cleared");
	cache = null;
}
