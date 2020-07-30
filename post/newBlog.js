const express = require('express');
const Blog = require('../models/blog');
const authenticate = require('../authenticate');

const newBlog = express.Router();

newBlog.post('/newblog', authenticate, (req, res) => {
	let s =
		'bl' +
		req.body.name.split(' ').join('').slice(0, 3).toLowerCase() +
		Date.now().toString();
	let blog = new Blog({
		id: s,
		author: req.body.email,
		title: req.body.title,
		content: req.body.content,
		date: req.body.date,
		time: req.body.time,
	});
	blog.save((err) => {
		if (err) {
			res.sendStatus(400);
		} else {
			res.send('SUCCESS');
		}
	});
});

module.exports = newBlog;
