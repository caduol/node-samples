import mysql from "mysql";

// conexão com o banco

let mysqlconn = function () {
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
    console.log("Connected DB!");
  });

  return connection;
};

export default mysqlconn;
