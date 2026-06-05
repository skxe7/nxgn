const express = require('express');
const path = require('path');

const app = express();

// папка, где лежит index.html
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('сервер запущен на http://localhost:3000');
});
