const express = require('express');
const User = require('../models/user');
const authenticate = require('../authenticate');

const updateUser = express.Router();

updateUser.put('/updateUser', authenticate, (req, res) => {
	let changes = {
		usn: req.query.usn,
		semester: req.query.semester,
		branch: req.query.branch,
	};
	User.updateOne({ email: req.body.email }, changes, (err, result) => {
		if (err) {
			res.sendStatus(400);
		} else {
			res.send('SUCCESS');
		}
	});
});

module.exports = updateUser;
