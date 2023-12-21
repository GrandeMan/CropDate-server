import merge from "lodash.merge";

const stage = process.env.NODE_ENV || "Development";

let envConfig;

if (stage === "Production") {
	envConfig = require("./prod").default;
} else {
	envConfig = require("./local").default;
}

export default merge(
	{
		stage,
		env: process.env.NODE_ENV,
		port: 3000,
		keys: {
			db: process.env.DATABASE_URL,
			rates: process.env.OPEN_EXCHANGE_API_KEY,
		},
	},
	envConfig
);
