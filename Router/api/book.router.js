const express = require('express');
const router = express.Router();

const Book = require('../../models/book.model');

router.get('/', async function(req, res) {
  var books = await Book.find();
  res.json(books);
});

module.exports =  router;