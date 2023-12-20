import axios from "axios";
import { prisma } from "./handlers/prismaClient";

let cropCache: any[] = null;
let ratesCache: any[] = null;

export async function cacheCrops() {
	try {
		if (cropCache !== null) {
			console.log("Using cached crops");
			return cropCache;
		}

		const crops = await prisma.crop.findMany({
			include: {
				volumes: {
					take: 5,
					orderBy: {
						date: "desc",
					},
				},
				prices: {
					take: 5,
					orderBy: {
						date: "desc",
					},
				},
			},
		});
		let i = 0;

		const latestCropData = crops.map((crop) => ({
			id: crop.id,
			category: crop.category,
			commodity: crop.commodity,
			dates: crop.volumes.map((volume) => volume.date),
			volumes: crop.volumes.map((volume) => volume.volume),
			prices: crop.prices.map((price) => price.price),
			market: crop.prices[0]?.market,
		}));

		cropCache = latestCropData;

		console.log("Crops cached");
		return cropCache;
	} catch (e) {
		console.error("Error getting crops from database", e);
		throw new Error("Error getting crops from database");
	}
}

export async function cacheRates() {
	try {
		if (ratesCache !== null) {
			console.log("Using cached rates");
			return ratesCache;
		}
		const fetchRates = await axios.get(
			`https://v6.exchangerate-api.com/v6/${process.env.OPEN_EXCHANGE_API_KEY}/latest/TTD`
		);

		const rates = fetchRates.data.conversion_rates;

		ratesCache = rates;
		console.log("Rates cached");
		return ratesCache;
	} catch (e) {
		console.error("Error getting rates", e);
		throw new Error("Error getting rates from database");
	}
}

export function clearCache() {
	console.log("Cache cleared");
	cropCache = null;
	ratesCache = null;
}
