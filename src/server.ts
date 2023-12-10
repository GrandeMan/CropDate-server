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

const app = express();

app.get("/", (req, res) => {
	console.log("Hello console!");
	res.status(200).sendFile(path.resolve("pages/index.html"));
});

app.use("/api", router);

export default app;
