import axios from "axios";
import { load } from "cheerio";

export async function updateBuffer(fetch: Function, update: Function) {
	const today = new Date().toLocaleDateString().slice(0, 10);

	// Check if the data is ready or the download link has been updated
	try {
		const response = await axios.get("https://www.namistt.com/", {
			timeout: 5000,
		});
		const $ = load(response.data);
		const dailyUpdateText = $(
			`#box5 a[href*="Norris%20Deonarine%20NWM%20Daily%20Market%20Report"]`
		).text();
		const lastUpdate = new Date(dailyUpdateText.slice(8))
			.toLocaleDateString()
			.slice(0, 10);
		// const lastUpdate = new Date().toLocaleDateString().slice(0, 10);
		// console.log("lastUpdate:", lastUpdate);
		// console.log("today:", today);

		if (lastUpdate === today) {
			console.log(
				"Data has been updated, proceeding to update database."
			);
			const data = await fetch();
			if (data) {
				await update(data);
			}
		} else {
			console.log("Data has not been updated yet.");
		}
	} catch (error) {
		console.error("Error during pre-check:", error);

		// Handle different types of errors (timeout, network error, etc.)
		if (error.code === "ECONNABORTED") {
			console.error("Timeout during pre-check.");
		} else {
			console.error("Internal Server Error during pre-check.");
		}
	}
}
