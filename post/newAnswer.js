const express = require('express');
const Answer = require('../models/answer');
const authenticate = require('../authenticate');

const newAnswer = express.Router();

newAnswer.post('/newanswer', authenticate, (req, res) => {
	let s =
		'an' +
		req.body.name.split(' ').join('').slice(0, 3).toLowerCase() +
		Date.now().toString();
	let answer = new Answer({
		id: s,
		targetId: req.body.targetId,
		author: req.body.email,
		content: req.body.content,
		date: req.body.date,
	});
	answer.save((err) => {
		if (err) {
			res.sendStatus(400);
		} else {
			res.send('SUCCESS');
		}
	});
});

module.exports = newAnswer;
