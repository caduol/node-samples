import connectionDB from "../../config/connetionDB";
import app from "express";
import newsModel from "../models/newsModel";

let router = app.Router();
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
  });

export default router;
