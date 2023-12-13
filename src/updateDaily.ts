import { prisma } from "./prismaClient";

export interface CropData {
	category: string;
	commodity: string;
	unit: string;
	volume: number;
	price: number;
	market: string;
	date: string;
}

export async function updateDatabaseDaily(data: CropData[]): Promise<void> {
	try {
		for (let item of data) {
			// Check if the current crop exists in the database
			let crop = await prisma.crop.findFirst({
				where: {
					commodity: item.commodity,
					category: item.category,
				},
			});

			// If the crop does not exist, create it
			if (!crop) {
				crop = await prisma.crop.create({
					data: {
						id: undefined, // Set id to undefined to let the database generate a unique id
						commodity: item.commodity,
						category: item.category,
						unit: item.unit,
					},
				});
			}

			// Insert or update the current crop's volume
			await prisma.volume.upsert({
				where: {
					id: crop && crop.id,
					date: item.date,
				},
				update: {
					volume: item.volume,
				},
				create: {
					crop: {
						connect: {
							id: crop && crop.id,
						},
					},
					date: item.date,
					volume: item.volume,
					market: item.market,
				},
			});

			// Insert or update the current crop's price
			await prisma.price.upsert({
				where: {
					id: crop && crop.id,
					date: item.date,
				},
				update: {
					price: item.price,
				},
				create: {
					crop: {
						connect: {
							id: crop && crop.id,
						},
					},
					date: item.date,
					price: item.price,
					market: item.market,
				},
			});
		}
	} catch (e) {
		console.error("Error caught in updateDatabaseDaily:", e);
		throw e;
	}
}
