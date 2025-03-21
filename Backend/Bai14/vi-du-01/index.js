const express = require("express");
const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.pug", {
    title: "Trang chủ",
    message: "Xin chào các bạn",
  });
});

app.get("/products", (req, res) => {
  res.send("<h1>Trang danh sách sản phẩm</h1>");
});

app.get("/blog", (req, res) => {
  res.send("<h1>Trang danh sách bài viết</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Trang liên hệ</h1>");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
