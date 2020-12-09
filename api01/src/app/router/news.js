import { Router } from "express";

// controllers
import NewsController from "../controllers/NewsController";

let router = new Router();
router
  .get("/", NewsController.index)
  .get("/detail", NewsController.show)
  .get("/add", async (req, res) => {
    res.render("news/add_news");
  })
  .post("/save", NewsController.store);

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

// });

export default router;
