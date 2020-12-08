import connectionDB from "../../config/connetionDB";
import { Router } from "express";
import newsModel from "../models/newsModel";
import Joi from "joi";

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
    res.render("news/add_news");
  })
  .post("/save", async (req, res) => {
    let newsSchema = Joi.object({
      title: Joi.string().min(2),
      summary: Joi.string().min(10).max(100).required(),
      author: Joi.string().required(),
      news_date: Joi.date().iso().required(),
      news: Joi.string().required(),
    });

    const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true, // remove unknown props
    };

    const { error, value } = newsSchema.validate(req.body, options);

    if (error) {
      res.render("news/add_news", { error: error.details });
      // next(
      //   `Validation error: ${error.details.map((x) => x.message).join(", ")}`
      // );
    } else {
      req.body = value;
      next();
    }
    // res.send(error);
  });
// let news = req.body;
// let newsSchema = Joi.object().keys({
//   title: Joi.string().min(2),
//   summary: Joi.string().min(10).max(100).required(),
//   author: Joi.string().required(),
//   news_date: Joi.date().iso().required(),
//   news: Joi.string().required(),
// });
// const result = Joi.validate(news, newsSchema, (err, value) => {
//   return err;
// });
// const { value, error } = result;
// const valid = error == null;
// try {
//   let result = await newsSchema.validateAsync(news);
//   res.send(result);
//   res.render("news/add_news", { err: result });
// } catch (error) {
//   next(error);
// }
// let connection = connectionDB();
// newsModel.save(news, connection, function (error, result) {
//   res.redirect("/news");
// });
// });

function createNewsSchema(req, res, next) {
  let newsSchema = Joi.object({
    title: Joi.string().min(2),
    summary: Joi.string().min(10).max(100).required(),
    author: Joi.string().required(),
    news_date: Joi.date().iso().required(),
    news: Joi.string().required(),
  });
  validateRequest(req, next, res, newsSchema);
}

function validateRequest(req, next, res, schema) {
  const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true, // remove unknown props
  };
  const { error, value } = schema.validate(req.body, options);
  if (error) {
    next(`Validation error: ${error.details.map((x) => x.message).join(", ")}`);
  } else {
    req.body = value;
    next();
  }
}

export default router;
