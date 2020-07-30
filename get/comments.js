const express = require('express');
const Comment = require('../models/comment');
const authenticate = require('../authenticate');

const comments = express.Router();

comments.get('/comments', authenticate, (req, res) => {
	Comment.find(
		{ targetId: req.query.targetId },
		{ _id: 0, author: 1, content: 1, date: 1 },
		(err, result) => {
			if (result) res.send(result);
			else res.send([]);
		}
	);
});

module.exports = comments;
