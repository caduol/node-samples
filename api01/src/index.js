import app from "./config/server";
import home from "./app/router/home";
import news from "./app/router/news";

app.use("/", home);
app.use("/news", news);

// const mysql = require('mysql')

// app.get('/products', (req,res)=>{
//     connection.query('select * from products', (error, results)=>{
//         if(error){
//             throw error
//         }

//         res.send(results.map(item => ({name: item.name, price: item.price})))
//     })
// })

app.listen(3000, () => {
  console.log(`Listening on 3000`);
});
