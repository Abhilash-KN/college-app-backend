const express = require('express');
const Question = require('../models/question');
const authenticate = require('../authenticate');

const question = express.Router();

question.get('/question', authenticate, (req, res) => {
	Question.findOne({ id: req.query.id }, (err, result) => {
		if (result) {
			res.send(result);
		} else {
			res.sendStatus(404);
		}
	});
});

module.exports = question;
