const data = [
	{
		category: "ROOT CROPS",
		commodity: "Carrot",
		unit: "Kg",
		volume: 3515,
		price: 12.35,
		market: "NDNWM",
		date: "2023-12-12T15:39:56.382Z",
	},
	{
		category: "ROOT CROPS",
		commodity: "Cassava",
		unit: "Kg",
		volume: 1440,
		price: 11.11,
		market: "NDNWM",
		date: "2023-12-12T15:39:56.382Z",
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

// const test = [
// 	{
// 		category: "ROOT CROPS",
// 		commodity: "Carrot",
// 		unit: "Kg",
// 		volume: 2041,
// 		price: 12.35,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "ROOT CROPS",
// 		commodity: "Cassava",
// 		unit: "Kg",
// 		volume: 2448,
// 		price: 11.11,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "ROOT CROPS",
// 		commodity: "Yam (Local)",
// 		unit: "Kg",
// 		volume: 544,
// 		price: 8.82,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "ROOT CROPS",
// 		commodity: "Yam (Imported)",
// 		unit: "Kg",
// 		volume: 675,
// 		price: 22.02,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "ROOT CROPS",
// 		commodity: "Dasheen(Local)",
// 		unit: "Kg",
// 		volume: 1116,
// 		price: 12.5,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "ROOT CROPS",
// 		commodity: "Dasheen(Imported)",
// 		unit: "Kg",
// 		volume: 4275,
// 		price: 7.23,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "ROOT CROPS",
// 		commodity: "Eddoe (Local)",
// 		unit: "Kg",
// 		volume: 216,
// 		price: 16.67,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "ROOT CROPS",
// 		commodity: "Eddoe (Imported)",
// 		unit: "Kg",
// 		volume: 2475,
// 		price: 15.56,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "ROOT CROPS",
// 		commodity: "Sweet Potato (Local)",
// 		unit: "Kg",
// 		volume: 5724,
// 		price: 9.72,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "ROOT CROPS",
// 		commodity: "Sweet Potato (Imported)",
// 		unit: "Kg",
// 		volume: 0,
// 		price: 0,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "ROOT CROPS",
// 		commodity: "Ginger",
// 		unit: "Kg",
// 		volume: 2881,
// 		price: 33.07,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "CONDIMENTS AND SPICES",
// 		commodity: "Celery",
// 		unit: "Bndl.",
// 		volume: 740,
// 		price: 75,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "CONDIMENTS AND SPICES",
// 		commodity: "Chive (L)",
// 		unit: "Bndl.",
// 		volume: 1084,
// 		price: 40,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "CONDIMENTS AND SPICES",
// 		commodity: "Thyme (s)",
// 		unit: "Bndl.",
// 		volume: 36,
// 		price: 80,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "CONDIMENTS AND SPICES",
// 		commodity: "Hot Pepper (100's)",
// 		unit: "100's",
// 		volume: 73,
// 		price: 40,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "CONDIMENTS AND SPICES",
// 		commodity: "Hot Pepper (40 lb)",
// 		unit: "Bag",
// 		volume: 120,
// 		price: 300,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "CONDIMENTS AND SPICES",
// 		commodity: "Shadon Beni",
// 		unit: "Bndl.",
// 		volume: 2700,
// 		price: 25,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "CONDIMENTS AND SPICES",
// 		commodity: "Pimento (S)",
// 		unit: "100's",
// 		volume: 30,
// 		price: 25,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "CONDIMENTS AND SPICES",
// 		commodity: "Pimento (M)",
// 		unit: "100's",
// 		volume: 587,
// 		price: 30,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "CONDIMENTS AND SPICES",
// 		commodity: "Pimento (L)",
// 		unit: "100's",
// 		volume: 826,
// 		price: 35,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "LEAFY VEGETABLES",
// 		commodity: "Lettuce (S)",
// 		unit: "Head",
// 		volume: 800,
// 		price: 3,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "LEAFY VEGETABLES",
// 		commodity: "Lettuce (M)",
// 		unit: "Head",
// 		volume: 1000,
// 		price: 5,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "LEAFY VEGETABLES",
// 		commodity: "Lettuce (L)",
// 		unit: "Head",
// 		volume: 1000,
// 		price: 7,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "LEAFY VEGETABLES",
// 		commodity: "Patchoi",
// 		unit: "Bndl.",
// 		volume: 1080,
// 		price: 8,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "LEAFY VEGETABLES",
// 		commodity: "Spinach (Amarantus spp.)",
// 		unit: "Bndl.",
// 		volume: 1080,
// 		price: 8,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "LEAFY VEGETABLES",
// 		commodity: "Cabbage (Imported) (Gn)",
// 		unit: "Kg",
// 		volume: 1633,
// 		price: 13.23,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "LEAFY VEGETABLES",
// 		commodity: "Cabbage(Local) (Gn)",
// 		unit: "Kg",
// 		volume: 2835,
// 		price: 14.33,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "LEAFY VEGETABLES",
// 		commodity: "Cabbage (White)",
// 		unit: "Kg",
// 		volume: 862,
// 		price: 11.02,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "LEAFY VEGETABLES",
// 		commodity: "Cabbage (Imported) (Purple)",
// 		unit: "Kg",
// 		volume: 454,
// 		price: 17.64,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "LEAFY VEGETABLES",
// 		commodity: "Callaloo Bush (Open)",
// 		unit: "Bndl.",
// 		volume: 1300,
// 		price: 4,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "LEAFY VEGETABLES",
// 		commodity: "Callaloo Bush (Roll)",
// 		unit: "Bndl.",
// 		volume: 1200,
// 		price: 5,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "LEAFY VEGETABLES",
// 		commodity: "Cauliflower(Imported)",
// 		unit: "Kg",
// 		volume: 0,
// 		price: 0,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "LEAFY VEGETABLES",
// 		commodity: "Cauliflower (Local)",
// 		unit: "Kg",
// 		volume: 658,
// 		price: 31.97,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "VEGETABLES",
// 		commodity: "Bodi bean",
// 		unit: "5lb Bndl.",
// 		volume: 792,
// 		price: 25,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "VEGETABLES",
// 		commodity: "Seim bean",
// 		unit: "Kg",
// 		volume: 304,
// 		price: 30.86,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "VEGETABLES",
// 		commodity: "Pigeon Pea",
// 		unit: "Kg",
// 		volume: 336,
// 		price: 33.07,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "VEGETABLES",
// 		commodity: "Cucumber",
// 		unit: "Kg",
// 		volume: 11160,
// 		price: 11.11,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "VEGETABLES",
// 		commodity: "Melongene (S)",
// 		unit: "Kg",
// 		volume: 297,
// 		price: 13.23,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "VEGETABLES",
// 		commodity: "Melongene (M)",
// 		unit: "Kg",
// 		volume: 603,
// 		price: 15.43,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "VEGETABLES",
// 		commodity: "Melongene (L)",
// 		unit: "Kg",
// 		volume: 2446,
// 		price: 19.84,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "VEGETABLES",
// 		commodity: "Ochro",
// 		unit: "100's",
// 		volume: 790,
// 		price: 20,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "VEGETABLES",
// 		commodity: "Plantain (Green)",
// 		unit: "Kg",
// 		volume: 1189,
// 		price: 19.84,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "VEGETABLES",
// 		commodity: "Plantain (Ripe)",
// 		unit: "Kg",
// 		volume: 2088,
// 		price: 19.84,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "VEGETABLES",
// 		commodity: "Pumpkin",
// 		unit: "Kg",
// 		volume: 12020,
// 		price: 2.2,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "VEGETABLES",
// 		commodity: "Sweet Pepper (S)",
// 		unit: "Kg",
// 		volume: 911,
// 		price: 22.05,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "VEGETABLES",
// 		commodity: "Sweet Pepper (M)",
// 		unit: "Kg",
// 		volume: 1270,
// 		price: 26.46,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "VEGETABLES",
// 		commodity: "Sweet Pepper (L)",
// 		unit: "Kg",
// 		volume: 1846,
// 		price: 28.66,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "VEGETABLES",
// 		commodity: "Sweet Pepper (Imported)",
// 		unit: "Kg",
// 		volume: 0,
// 		price: 0,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "VEGETABLES",
// 		commodity: "Tomato (S)",
// 		unit: "Kg",
// 		volume: 408,
// 		price: 33.07,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "VEGETABLES",
// 		commodity: "Tomato (M)",
// 		unit: "Kg",
// 		volume: 916,
// 		price: 38.58,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "VEGETABLES",
// 		commodity: "Tomato (L)",
// 		unit: "Kg",
// 		volume: 1211,
// 		price: 41.89,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "VEGETABLES",
// 		commodity: "Tomato (Imported)",
// 		unit: "Kg",
// 		volume: 522,
// 		price: 28.19,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "VEGETABLES",
// 		commodity: "Caraillie (S)",
// 		unit: "Kg",
// 		volume: 204,
// 		price: 13.23,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "VEGETABLES",
// 		commodity: "Caraillie (M)",
// 		unit: "Kg",
// 		volume: 159,
// 		price: 14.33,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "VEGETABLES",
// 		commodity: "Caraillie (L)",
// 		unit: "Kg",
// 		volume: 746,
// 		price: 17.64,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "VEGETABLES",
// 		commodity: "Squash",
// 		unit: "Kg",
// 		volume: 1134,
// 		price: 11.02,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "VEGETABLES",
// 		commodity: "Christophene",
// 		unit: "Kg",
// 		volume: 1052,
// 		price: 37.48,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "FRUITS",
// 		commodity: "Coconut (Dry) (S)",
// 		unit: "100's",
// 		volume: 0,
// 		price: 0,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "FRUITS",
// 		commodity: "Coconut (Dry) (M)",
// 		unit: "100's",
// 		volume: 10,
// 		price: 500,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "FRUITS",
// 		commodity: "Coconut (Dry) (L)",
// 		unit: "100's",
// 		volume: 46,
// 		price: 600,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "FRUITS",
// 		commodity: "Banana (Ripe)",
// 		unit: "Kg",
// 		volume: 4950,
// 		price: 13.33,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "FRUITS",
// 		commodity: "Banana (Green)",
// 		unit: "Kg",
// 		volume: 1112,
// 		price: 5.51,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "FRUITS",
// 		commodity: "Banana (Gr.Michel)",
// 		unit: "Kg",
// 		volume: 0,
// 		price: 0,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "FRUITS",
// 		commodity: "Paw Paw",
// 		unit: "Kg",
// 		volume: 4378,
// 		price: 6.61,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "FRUITS",
// 		commodity: "Pineapple",
// 		unit: "Kg",
// 		volume: 5624,
// 		price: 13.23,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "FRUITS",
// 		commodity: "Watermelon",
// 		unit: "Kg",
// 		volume: 4581,
// 		price: 11.02,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "FRUITS",
// 		commodity: "Sorrel",
// 		unit: "Kg",
// 		volume: 150,
// 		price: 13.23,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "CITRUS",
// 		commodity: "Lime (S)",
// 		unit: "100's",
// 		volume: 0,
// 		price: 0,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "CITRUS",
// 		commodity: "Lime (M)",
// 		unit: "100's",
// 		volume: 74,
// 		price: 160,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "CITRUS",
// 		commodity: "Lime (L)",
// 		unit: "100's",
// 		volume: 117,
// 		price: 180,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "CITRUS",
// 		commodity: "Grapefruit",
// 		unit: "100's",
// 		volume: 20,
// 		price: 200,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "CITRUS",
// 		commodity: "Orange (S)",
// 		unit: "100's",
// 		volume: 15,
// 		price: 150,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "CITRUS",
// 		commodity: "Orange (M)",
// 		unit: "100's",
// 		volume: 52,
// 		price: 200,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "CITRUS",
// 		commodity: "Orange (L)",
// 		unit: "100's",
// 		volume: 60,
// 		price: 250,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "CITRUS",
// 		commodity: "Orange (Navel)",
// 		unit: "100's",
// 		volume: 0,
// 		price: 0,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "CITRUS",
// 		commodity: "Orange (King)",
// 		unit: "100's",
// 		volume: 0,
// 		price: 0,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// 	{
// 		category: "CITRUS",
// 		commodity: "Portugal",
// 		unit: "100's",
// 		volume: 190,
// 		price: 150,
// 		market: "NDNWM",
// 		date: "2023-12-13T15:39:56.382Z",
// 	},
// ];

module.exports = data;
