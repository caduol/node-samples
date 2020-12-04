import connectionDB from "../../config/connetionDB";
export default function (app) {
  app
    .get("/news", async (req, res) => {
      let connection = connectionDB();
      connection.query("select * from news", function (error, result) {
        res.render("news/index", {
          data: result,
        });
      });
    })

    .get("/add-news", async (req, res) => {
      let data = [{ name: "Yoda", type: "StarWars" }];

      res.render("news/add_news", {
        data: data,
      });
    });
}
