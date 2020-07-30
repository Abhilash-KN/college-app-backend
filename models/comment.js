const mongoose = require('mongoose');

const m = mongoose.Schema({
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

const Comment = (module.exports = mongoose.model('comments', m));
