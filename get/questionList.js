const express = require('express');
const Question = require('../models/question');
const authenticate = require('../authenticate');

const questionList = express.Router();

questionList.get('/questionList', authenticate, (req, res) => {
	Question.find({}, { _id: 0, id: 1, title: 1, author: 1, date: 1, time: 1 })
		.sort({ time: -1 })
		.skip(parseInt(req.query.n))
		.limit(10)
		.exec((err, result) => {
			if (result) res.send(result);
			else res.send([]);
		});
});

module.exports = questionList;
