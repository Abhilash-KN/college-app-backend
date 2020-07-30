const mongoose = require('mongoose');

const m = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	usn: {
		type: String,
	},
	semester: {
		type: Number,
	},
	branch: {
		type: String,
	},
});

const User = (module.exports = mongoose.model('users', m));
