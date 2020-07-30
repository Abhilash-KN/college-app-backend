const express = require('express');
const Answer = require('../models/answer');
const authenticate = require('../authenticate');

const answers = express.Router();

answers.get('/answers', authenticate, (req, res) => {
	Answer.find(
		{ targetId: req.query.targetId },
		{ _id: 0, content: 1, id: 1, author: 1, date: 1 },
		(err, result) => {
			if (result) res.send(result);
			else res.send([]);
		}
	);
});

module.exports = answers;
