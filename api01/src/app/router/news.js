import mysql from "mysql";

export default function (app) {
  app
    .get("/news", async (req, res) => {
      let connection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
      });
      connection.connect((err) => {
        if (err) {
          throw err;
        }
        console.log("Connected!");
      });
      connection.query("select * from news", function (error, result) {
        res.json({ message: result });
        // console.log(error);
      });

      let data = [
        { name: "Jiraya", type: "superhero" },
        { name: "Changeman", type: "superhero" },
        { name: "Flashman", type: "superhero" },
        { name: "Black kamen Rider", type: "superhero" },
        { name: "Kuwago", type: "moster" },
        { name: "Ouwashi", type: "moster" },
        { name: "Oninin Dokusai", type: "enemy" },
        { name: "Kannin Dragon", type: "enemy" },
        { name: "Wandar", type: "enemy" },
      ];

      // res.render("news/index", {
      //   data: data,
      // });
    })

    .get("/add-news", async (req, res) => {
      let data = [{ name: "Yoda", type: "StarWars" }];

      res.render("news/add_news", {
        data: data,
      });
    });
}
