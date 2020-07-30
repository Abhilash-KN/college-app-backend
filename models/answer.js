const mongoose = require('mongoose');

const m = mongoose.Schema({
	id: {
		type: String,
		unique: true,
		required: true,
	},
	targetId: {
		type: String,
		required: true,
	},
	author: {
		type: String,
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
});

const Answer = (module.exports = mongoose.model('answers', m));
