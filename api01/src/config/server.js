import express from "express";
import path from "path";
import mustacheExpress from "mustache-express";
import cors from "cors";
import dotenv from "dotenv/config";
import compression from "compression";
import bodyParser from "body-parser";
import home from "../app/router/home";
import news from "../app/router/news";

class Server {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // CONFIG
    this.app.use(compression());
    // cors
    this.app.use(cors());
    // bodyParser - extended: true -> permite o aninhamento de objetos (nested objects)
    this.app.use(express.urlencoded({ extended: true }));

    //Template engine
    this.app.engine(".mustache", mustacheExpress());
    this.app.set("view engine", "mustache");
    this.app.set("views", "./src/app/views");
    // Arquivos estaticos
    this.app.use(express.static(`./src/app/public`));
  }

  routes() {
    this.app.use("/", home);
    this.app.use("/news", news);
  }
}

export default new Server().app;
