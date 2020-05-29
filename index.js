require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');

const apiBook = require('./Router/api/book.router');

const app = express();
const port = process.env.port || 8008;

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})

app.use('/api/books', apiBook);

app.listen(port, function() {
  console.log(`Server is listening on port: ${port}`);
})