import fs from "fs";
import path from "path";
import xlsx from "xlsx";
import csvParse from "csv-parse/sync";

async function fetchData(): Promise<any> {
	try {
		// fetch from local file
		const spreadsheetPath = path.resolve(
			__dirname,
			"./testSpreadsheet.xls"
		);
		const data = fs.readFileSync(spreadsheetPath);
		const parsedData = xlsx.read(data, { type: "buffer" });
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

				return {
					commodity,
					unit,
					volume,
					price,
				};
			},
		});

		return csvToJson;
	} catch (e) {
		console.error("error caught in fetchData", e);
		throw e;
	}
}
