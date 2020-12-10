import app from "./config/server";

// import "jquery";
// boostrap

// import "@fortawesome/fontawesome-free/css/all.css";
// import "@fortawesome/fontawesome-free/js/all.js";

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
