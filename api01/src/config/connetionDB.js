import mysql from "mysql";

// conexão com o banco

export default function () {
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

  return connection;
}
