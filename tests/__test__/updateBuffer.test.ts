import axios from "axios";
import { updateBuffer } from "../../src/handlers/updateBuffer";

// Mock axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mock fetch and update functions
const mockedFetch = jest.fn();
const mockedUpdate = jest.fn();

describe("updateBuffer Middleware", () => {
	// Reset mocks before each test
	beforeEach(() => {
		jest.resetAllMocks();
	});

	test("should update the database when data is ready", async () => {
		// Mock axios response
		mockedAxios.get.mockResolvedValueOnce({
			data: "<html>...</html>",
		});

		// Mock data ready scenario
		mockedFetch.mockResolvedValueOnce([
			{
				commodity: "Carrots",
				unit: "lb",
				volume: 100,
				price: 10,
				market: "NDNWM",
				date: "2021-08-31",
			},
		]);

		await updateBuffer(mockedFetch, mockedUpdate);
		console.log(mockedUpdate.mock.calls);

		// Expectations
		expect(mockedUpdate).toHaveBeenCalledWith([
			{
				commodity: "Carrots",
				unit: "lb",
				volume: 100,
				price: 10,
				market: "NDNWM",
				date: "2021-08-31",
			},
		]);
	});

	test("should handle data not ready scenario", async () => {
		// Mock axios response
		mockedAxios.get.mockResolvedValueOnce({
			data: "<html>...</html>",
		});

		// Mock data not ready scenario
		mockedFetch.mockResolvedValueOnce(undefined);

		await updateBuffer(mockedFetch, mockedUpdate);

		// Expectations
		expect(mockedUpdate).not.toHaveBeenCalled();
	});

	test("should handle error during pre-check", async () => {
		// Mock axios error
		mockedAxios.get.mockRejectedValueOnce(new Error("Mocked error"));

		await updateBuffer(mockedFetch, mockedUpdate);

		// Expectations
		expect(mockedUpdate).not.toHaveBeenCalled();
	});

	test("should handle timeout error during pre-check", async () => {
		// Mock axios timeout error
		const timeoutError = new Error("Timeout error");
		(timeoutError as any).code = "ECONNABORTED";
		mockedAxios.get.mockRejectedValueOnce(timeoutError);

		await updateBuffer(mockedFetch, mockedUpdate);

		// Expectations
		expect(mockedUpdate).not.toHaveBeenCalled();
	});
});
