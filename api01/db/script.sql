use portal_news;

create table if not exists news(
    id_news int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title varchar(100),
    news text,
    createdAt timestamp DEFAULT CURRENT_TIMESTAMP);

insert into news values(0,'Titulo da noticia','content news','2016-03-13 02:32:21');