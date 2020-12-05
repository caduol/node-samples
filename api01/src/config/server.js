import express from "express";
import path from "path";
import mustacheExpress from "mustache-express";
import cors from "cors";
import dotenv from "dotenv/config";
import home from "../app/router/home";
import news from "../app/router/news";

const app = express();

// CONFIG
// cors
// app.use(cors());

// Template engine
app.engine(".mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", "./src/app/views");

//Routes

app.use("/", home);
app.use("/news", news);

export default app;
