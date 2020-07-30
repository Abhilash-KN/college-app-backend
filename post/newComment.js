const express = require('express');
const Comment = require('../models/comment');
const authenticate = require('../authenticate');

const newComment = express.Router();

newComment.post('/newcomment', authenticate, (req, res) => {
	let comment = new Comment({
		targetId: req.body.targetId,
		author: req.body.email,
		content: req.body.content,
		date: req.body.date,
	});

	comment.save((err) => {
		if (err) {
			res.sendStatus(400);
		} else {
			res.send('SUCCESS');
		}
	});
});

module.exports = newComment;
