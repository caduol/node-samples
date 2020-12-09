// list all
let listNews = function (connection, callback) {
  connection.query("select * from news", callback);
};
// get especific item
let getNews = function (connection, callback) {
  connection.query("select * from news where id_news = 2", callback);
};
// save item
let save = function (news, connection, callback) {
  connection.query("insert into news set ?", news, callback);
};
export default { listNews, getNews, save };
