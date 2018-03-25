import express from "express";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Promise from "bluebird";

import users from "./routes/users";
import resources from "./routes/resources";

dotenv.config();
const app = express();
app.use(bodyParser.json());
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL);

app.use("/api/users", users);
app.use("/api/resources", resources);

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8080, () => console.log("running on localhost:8080"));
