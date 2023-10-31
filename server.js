const express = require('express');
const app = express();
const fs = require('fs');

// Đọc tệp JSON
const data = JSON.parse(fs.readFileSync('./data/dataTongTheNhaMay.json', 'utf8'));

// Tạo một API endpoint để truy vấn dữ liệu
app.post('/api/dataTongTheNhaMay', (req, res) => {
  const { datetime } = req.query;
  console.log('timeQuery', datetime);
  const filteredData = data.filter(item => {
    const time = new Date(item.Time);
    const timeQuery = new Date(datetime);
    return time.getTime() === timeQuery.getTime();
  });

  res.json(filteredData);
});

// Khởi chạy server
const port = process.env.PORT || 3200; // Chọn một cổng mà bạn muốn sử dụng
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});