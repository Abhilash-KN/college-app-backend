const express = require('express');
const Blog = require('../models/blog');
const authenticate = require('../authenticate');

const blog = express.Router();

blog.get('/blog', authenticate, (req, res) => {
	Blog.findOne({ id: req.query.id }, (err, result) => {
		if (result) {
			res.send(result);
		} else {
			res.sendStatus(404);
		}
	});
});

module.exports = blog;
