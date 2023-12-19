import axios from "axios";
import xlsx from "xlsx";
import csvParse from "csv-parse/sync";
import { load } from "cheerio";
import { get } from "http";
import path from "path";
import fs from "fs";

const today = new Date().toISOString();

export async function fetchCropData(): Promise<any> {
	try {
		//fetch from url
		const GET_URL = "https://www.namistt.com/";
		const response = await axios.get(GET_URL);
		const data = response.data;
		const $ = load(data);
		const dailyUpdatePath = $(
			`#box5 a[href*="Norris%20Deonarine%20NWM%20Daily%20Market%20Report"]`
		).attr("href");
		const dailyUpdateLink = `${GET_URL}${dailyUpdatePath.slice(3)}`;

		// download file and parse
		const response2 = await axios.get(dailyUpdateLink, {
			responseType: "arraybuffer",
		});
		const parsedData = xlsx.read(new Uint8Array(response2.data), {
			type: "array",
		});
		const sheetName = parsedData.SheetNames[0];
		const sheetDataToCsv = xlsx.utils.sheet_to_csv(
			parsedData.Sheets[sheetName]
		);
		const csvToJson = await csvParse.parse(sheetDataToCsv, {
			columns: false,
			skip_empty_lines: true,
			skipRecordsWithEmptyValues: true,
			from_line: 13,
			on_record: (record) => {
				const commodity = record[0];
				const unit = record[1];
				const volume = parseFloat(record[3]) || 0;
				const price = parseFloat(record[6]) || 0;
				const date = today;
				const market = "NDNWM";

				return {
					commodity,
					unit,
					volume,
					price,
					market,
					date,
				};
			},
		});

		const processedData = [];
		let currentCategory = null;

		csvToJson.forEach((item) => {
			try {
				// Check if the current item is a category
				if (
					item.commodity &&
					item.unit === "" &&
					item.volume === 0 &&
					item.price === 0
				) {
					currentCategory = item.commodity;
				} else {
					// If not a category, add the current category to the item
					if (currentCategory) {
						processedData.push({
							category: currentCategory,
							...item,
						});
					}
				}
			} catch (error) {
				console.error("Error occurred while processing json:", error);
			}
		});

		return processedData;
	} catch (e) {
		console.error("Error caught in fetchCropData:", e);
		throw e;
	}
}

export async function fetchMonthlyVolume(): Promise<any> {
	try {
		// fetch from local file
		const spreadsheetPath = path.resolve(
			__dirname,
			"../tests/totalVolumes.xls"
		);
		const data = fs.readFileSync(spreadsheetPath);
		const parsedData = xlsx.read(data, { type: "buffer" });
		const sheetName = parsedData.SheetNames[13];
		const sheetDataToCsv = xlsx.utils.sheet_to_csv(
			parsedData.Sheets[sheetName]
		);
		const csvToJson = await csvParse.parse(sheetDataToCsv, {
			columns: false,
			skip_empty_lines: true,
			skipRecordsWithEmptyValues: true,
			from_line: 4,
			on_record: (record) => {
				const commodity = record[0];
				const unit = record[1];
				let i = 2;
				const volumes = [];
				while (record[i] && i <= 13) {
					if (
						record[i] === " " ||
						record[i] === "na" ||
						record[i] === "NA" ||
						record[i] === null ||
						record[i] === undefined
					) {
						volumes.push(0);
					}
					volumes.push(parseInt(record[i].split(",").join("")) || 0);
					i++;
				}
				const yearlyVolume =
					parseInt(record[14].split(",").join("")) || 0;
				// 	const date = today;
				const market = "NDNWM";

				return {
					commodity,
					unit,
					volumes,
					yearlyVolume,
					market,
				};
			},
		});

		const processedData = [];
		let currentCategory = null;

		csvToJson.forEach((item) => {
			// Check if the current item is a category
			if (
				item.commodity &&
				item.unit === "" &&
				Array.isArray(item.volumes) &&
				item.volumes.length === 0 &&
				item.yearlyVolume === 0
			) {
				currentCategory = item.commodity;
			} else {
				// If not a category, add the current category to the item
				if (currentCategory) {
					processedData.push({
						category: currentCategory,
						...item,
					});
				}
			}
		});

		return processedData.slice(0, -1);
	} catch (e) {
		console.error("Error caught in fetchMonthlyVolume:", e);
		throw e;
	}
}
