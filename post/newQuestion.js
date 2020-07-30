const express = require('express');
const Question = require('../models/question');
const authenticate = require('../authenticate');

const newQuestion = express.Router();

newQuestion.post('/newquestion', authenticate, (req, res) => {
	let s =
		'qu' +
		req.body.name.split(' ').join('').slice(0, 3).toLowerCase() +
		Date.now().toString();
	let question = new Question({
		id: s,
		author: req.body.email,
		title: req.body.title,
		content: req.body.content,
		date: req.body.date,
		time: req.body.time,
	});
	question.save((err) => {
		if (err) {
			res.sendStatus(400);
		} else {
			res.send('SUCCESS');
		}
	});
});

module.exports = newQuestion;
