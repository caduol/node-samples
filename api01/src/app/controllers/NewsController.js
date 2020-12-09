import connectionDB from "../../config/connetionDB";
import newsModel from "../models/newsModel";
import Joi from "joi";
class NewsController {
  async index(req, res) {
    let connection = connectionDB();

    newsModel.listNews(connection, function (error, result) {
      res.render("news/index", {
        data: result,
      });
    });
  }

  async show(req, res) {
    let connection = connectionDB();

    newsModel.getNews(connection, function (error, result) {
      res.send({
        data: result,
      });
    });
  }

  async store(req, res) {
    let news = req.body;
    let newsSchema = Joi.object({
      title: Joi.string().min(2),
      summary: Joi.string().min(10).max(100).required(),
      author: Joi.string().required(),
      news_date: Joi.date().iso().required(),
      news: Joi.string().required(),
    });

    const options = {
      // include all errors
      abortEarly: false,
      // ignore unknown props
      allowUnknown: true,
      // remove unknown props
      stripUnknown: true,
    };

    const { error, value } = newsSchema.validate(news, options);

    if (error) {
      res.render("news/add_news", { error: error.details, news });
    } else {
      let connection = connectionDB();
      newsModel.save(news, connection, function (error, result) {
        res.redirect("/news");
      });
    }
  }
}

export default new NewsController();
