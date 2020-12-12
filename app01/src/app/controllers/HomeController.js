import connectionDB from "../../config/connetionDB";
import newsModel from "../models/newsModel";
class HomeController {
  async index(req, res) {
    let connection = connectionDB();

    newsModel.getLastNews(connection, (error, result) => {
      res.render("home/index", {
        news: result,
      });
    });
  }
}

export default new HomeController();
