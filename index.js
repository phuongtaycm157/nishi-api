const express = require('express');
const app = express();

const port = process.env.port || 8008;

app.get('/', function(req, res) {
  res.json({
    name: 'Nguyễn Phương Tây'
  })
})

app.listen(port, function() {
  console.log(`Server is listening on port: ${port}`);
})