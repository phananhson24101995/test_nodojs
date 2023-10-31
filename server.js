const express = require("express");
const home = require("./routes/home");
const getapi = require("./routes/api");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/home", home);
app.use("/api", getapi)

// Khởi chạy server
const port = process.env.PORT || 3200; // Chọn một cổng mà bạn muốn sử dụng
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});