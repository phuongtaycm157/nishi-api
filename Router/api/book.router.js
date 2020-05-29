const express = require('express');
const router = express.Router();

const Book = require('../../models/book.model');

router.get('/', async function(req, res) {
  let books = await Book.find();
  res.json(books);
});

router.get('/search', async function(req, res) {
  let q = req.query.q;
  let books = await Book.find();
  books = books.filter((item) => {
	return item.title.toLowerCase().indexOf(q.toLowerCase()) !== -1; 
  });
  res.json(books);
});

module.exports =  router;