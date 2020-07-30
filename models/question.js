const mongoose = require('mongoose');

const m = mongoose.Schema({
	id: {
		type: String,
		unique: true,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		unique: true,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	time: {
		type: String,
		required: true,
	},
});

const Question = (module.exports = mongoose.model('questions', m));
