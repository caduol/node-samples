// list all
let listNews = function (connection, callback) {
  connection.query("select * from news order by news_date desc", callback);
};
// get especific item
let getOneNews = function (connection, id_news, callback) {
  connection.query(`select * from news where id_news = ${id_news}`, callback);
};
// save item
let save = function (news, connection, callback) {
  connection.query("insert into news set ?", news, callback);
};

let getLastNews = function (connection, callback) {
  connection.query(
    "select * from news order by news_date desc limit 6",
    callback
  );
};

let deleteItem = function (id_news, connection, callback) {
  connection.query(`delete from news where id_news = ${id_news}`, callback);
};

export default { listNews, getOneNews, save, getLastNews, deleteItem };
