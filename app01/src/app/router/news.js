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
  .post("/save", NewsController.store)
  .get("/delete/:id", NewsController.delete);

export default router;
