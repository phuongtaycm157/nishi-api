require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');

const apiBook = require('./Router/api/book.router');

const app = express();
const port = process.env.PORT || 8008;

app.use(cors())

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})

app.use('/', (req, res) => res.send('Hello'))

app.use('/api/books', apiBook);

app.listen(port, function() {
  console.log(`Server is listening on port: ${port}`);
})