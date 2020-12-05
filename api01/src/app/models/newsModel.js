let listNews = function (connection, callback) {
  connection.query("select * from news", callback);
};

let getNews = function (connection, callback) {
  connection.query("select * from news where id_news = 2", callback);
};

export default { listNews, getNews };
