import { updateDatabaseDaily } from "../../src/updateDaily";
import { prisma } from "../../src/handlers/prismaClient";

describe("updateDatabaseDaily", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it("should update the database", async () => {
		const mockData = [
			{
				category: "ROOT CROPS",
				commodity: "Carrot",
				unit: "Kg",
				volume: 2041,
				price: 12.35,
				market: "NDNWM",
				date: "2023-12-13T15:39:56.382Z",
			},
			{
				category: "ROOT CROPS",
				commodity: "Cassava",
				unit: "Kg",
				volume: 2448,
				price: 11.11,
				market: "NDNWM",
				date: "2023-12-13T15:39:56.382Z",
			},
			{
				category: "ROOT CROPS",
				commodity: "Yam (Local)",
				unit: "Kg",
				volume: 544,
				price: 8.82,
				market: "NDNWM",
				date: "2023-12-13T15:39:56.382Z",
			},
			{
				category: "CONDIMENTS AND SPICES",
				commodity: "Pimento (L)",
				unit: "100's",
				volume: 826,
				price: 35,
				market: "NDNWM",
				date: "2023-12-13T15:39:56.382Z",
			},
			{
				category: "LEAFY VEGETABLES",
				commodity: "Lettuce (S)",
				unit: "Head",
				volume: 800,
				price: 3,
				market: "NDNWM",
				date: "2023-12-13T15:39:56.382Z",
			},
			{
				category: "LEAFY VEGETABLES",
				commodity: "Lettuce (M)",
				unit: "Head",
				volume: 1000,
				price: 5,
				market: "NDNWM",
				date: "2023-12-13T15:39:56.382Z",
			},
			{
				category: "LEAFY VEGETABLES",
				commodity: "Lettuce (L)",
				unit: "Head",
				volume: 1000,
				price: 7,
				market: "NDNWM",
				date: "2023-12-13T15:39:56.382Z",
			},
			{
				category: "CONDIMENTS AND SPICES",
				commodity: "Hot Pepper (40 lb)",
				unit: "Bag",
				volume: 120,
				price: 300,
				market: "NDNWM",
				date: "2023-12-13T15:39:56.382Z",
			},
			{
				category: "CONDIMENTS AND SPICES",
				commodity: "Shadon Beni",
				unit: "Bndl.",
				volume: 2700,
				price: 25,
				market: "NDNWM",
				date: "2023-12-13T15:39:56.382Z",
			},
		];

		const mockCrop = {
			id: 1,
			commodity: "Carrot",
			category: "ROOT CROPS",
			unit: "Kg",
		};

		const mockPrisma = {
			crop: {
				findFirst: jest.fn().mockResolvedValueOnce(null),
				create: jest.fn().mockResolvedValueOnce(mockCrop),
			},
			volume: {
				upsert: jest.fn().mockResolvedValueOnce({}),
			},
			price: {
				upsert: jest.fn().mockResolvedValueOnce({}),
			},
		};

		jest.spyOn(prisma.crop, "findFirst").mockImplementation(
			mockPrisma.crop.findFirst
		);
		jest.spyOn(prisma.crop, "create").mockImplementation(
			mockPrisma.crop.create
		);
		jest.spyOn(prisma.volume, "upsert").mockImplementation(
			mockPrisma.volume.upsert
		);
		jest.spyOn(prisma.price, "upsert").mockImplementation(
			mockPrisma.price.upsert
		);

		await updateDatabaseDaily(mockData);

		expect(mockPrisma.crop.findFirst).toHaveBeenCalledTimes(
			mockData.length
		);
		expect(mockPrisma.crop.create).toHaveBeenCalledTimes(mockData.length);
		expect(mockPrisma.volume.upsert).toHaveBeenCalledTimes(mockData.length);
		expect(mockPrisma.price.upsert).toHaveBeenCalledTimes(mockData.length);
	});
});
it("should create a new crop if it does not exist in the database", async () => {
	const mockData = [
		{
			category: "ROOT CROPS",
			commodity: "Carrot",
			unit: "Kg",
			volume: 2041,
			price: 12.35,
			market: "NDNWM",
			date: "2023-12-13T15:39:56.382Z",
		},
	];

	const mockCrop = {
		id: 1,
		commodity: "Carrot",
		category: "ROOT CROPS",
		unit: "Kg",
	};

	const mockPrisma = {
		crop: {
			findFirst: jest.fn().mockResolvedValueOnce(null),
			create: jest.fn().mockResolvedValueOnce(mockCrop),
		},
		volume: {
			upsert: jest.fn().mockResolvedValueOnce({}),
		},
		price: {
			upsert: jest.fn().mockResolvedValueOnce({}),
		},
	};

	jest.spyOn(prisma.crop, "findFirst").mockImplementation(
		mockPrisma.crop.findFirst
	);
	jest.spyOn(prisma.crop, "create").mockImplementation(
		mockPrisma.crop.create
	);
	jest.spyOn(prisma.volume, "upsert").mockImplementation(
		mockPrisma.volume.upsert
	);
	jest.spyOn(prisma.price, "upsert").mockImplementation(
		mockPrisma.price.upsert
	);

	await updateDatabaseDaily(mockData);

	expect(mockPrisma.crop.findFirst).toHaveBeenCalledTimes(mockData.length);
	expect(mockPrisma.crop.create).toHaveBeenCalledTimes(mockData.length);
	expect(mockPrisma.volume.upsert).toHaveBeenCalledTimes(mockData.length);
	expect(mockPrisma.price.upsert).toHaveBeenCalledTimes(mockData.length);
});
