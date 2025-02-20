// app.js
const express = require("express");
const app = express();
const { indexRouter } = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const path = require("node:path");

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/", indexRouter);
app.use("/new", newRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
