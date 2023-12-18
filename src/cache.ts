import axios from "axios";
import { prisma } from "./prismaClient";

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
					take: 2,
					orderBy: {
						date: "desc",
					},
				},
				prices: {
					take: 2,
					orderBy: {
						date: "desc",
					},
				},
			},
		});
		const latestCropData = crops.map((crop) => ({
			id: crop.id,
			category: crop.category,
			commodity: crop.commodity,
			latest_date: crop.volumes[0]?.date,
			latest_volume: crop.volumes[0]?.volume,
			latest_price: crop.prices[0]?.price,
			market: crop.prices[0]?.market,
		}));

		const previousCropData = crops.map((crop) => ({
			id: crop.id,
			previous_date: crop.volumes[1]?.date,
			previous_volume: crop.volumes[1]?.volume,
			previous_price: crop.prices[1]?.price,
		}));

		cropCache = [
			{ latest: latestCropData },
			{ previous: previousCropData },
		];

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
