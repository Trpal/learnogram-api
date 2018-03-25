import express from "express";
import path from "path";
import mongoose from "mongoose";

const app = express();

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8080, () => console.log("running on localhost:8080"));
