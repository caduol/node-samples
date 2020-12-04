import express from "express";
import path from "path";
import mustacheExpress from "mustache-express";
import cors from "cors";
import dotenv from "dotenv/config";

const app = express();

// CONFIG
// cors
app.use(cors());

// Template engine
app.engine(".mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", "./src/app/views");

export default app;
