const express = require('express');
const app = express();

const port = 7876;

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

module.exports = app;

