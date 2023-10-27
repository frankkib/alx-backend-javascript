const http = require('http');


const app = http.createServer((req, res) => {
  
  res.setHeader('Content-Type', 'text/plain');

  res.end('Hello Holberton School!');
});


const port = 1245;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;

