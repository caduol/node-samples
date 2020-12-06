import connectionDB from "../../config/connetionDB";
import { Router } from "express";
import newsModel from "../models/newsModel";

let router = new Router();
router
  .get("/", async (req, res) => {
    let connection = connectionDB();

    newsModel.listNews(connection, function (error, result) {
      res.render("news/index", {
        data: result,
      });
    });
  })
  .get("/detail", async (req, res) => {
    let connection = connectionDB();

    newsModel.getNews(connection, function (error, result) {
      res.send({
        data: result,
      });
    });
  })
  .get("/add", async (req, res) => {
    // newsModel.getNews(connection, function (error, result) {
    res.render("news/index");
    // });
  })
  .post("/save", async (req, res) => {
    let news = req.body;
    let connection = connectionDB();

    newsModel.save(news, connection, function (error, result) {
      res.redirect("/news");
    });
  });

export default router;
