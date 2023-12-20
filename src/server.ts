/*
 * -----------------------------------------------------------------------------
 * Copyright 2023 Joshua Morales
 * -----------------------------------------------------------------------------
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *
 * You may obtain a copy of the License at:
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * -----------------------------------------------------------------------------
 */
import path from "path";
import express from "express";
import router from "./router";
import morgan from "morgan";
import cron from "node-cron";
import { fetchCropData } from "./crawler";
import { updateDatabaseDaily } from "./updateDaily";
import { updateBuffer } from "./handlers/updateBuffer";
import { clearCache } from "./cache";

// Run the updateBuffer function every weekday at 9:20 AM
cron.schedule(
	"20 9 * * 1-5",
	async () => {
		updateBuffer(fetchCropData, updateDatabaseDaily);
		clearCache();
	},
	{
		scheduled: true,
		timezone: "America/Port_of_Spain",
	}
);

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	console.log("Server initialized");
	res.status(200).sendFile(path.resolve("pages/index.html"));
});

app.use("/api", router);

export default app;
