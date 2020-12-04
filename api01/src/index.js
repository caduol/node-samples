import app from "./config/server";

import getMessage from "./getMessage";

const port = 3000;

import home from "./app/router/home";
home(app);
import news from "./app/router/news";
news(app);

// const mysql = require('mysql')

// const app = express();
// const port = 3000

// const connection = mysql.createConnection({
//     host:'db',
//     user:'root',
//     password:'pwdapp',
//     database:'dockerapi'
// })

// connection.connect();connection.connect();

// app.get('/products', (req,res)=>{
//     connection.query('select * from products', (error, results)=>{
//         if(error){
//             throw error
//         }

//         res.send(results.map(item => ({name: item.name, price: item.price})))
//     })
// })

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
