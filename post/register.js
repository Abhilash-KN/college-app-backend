const express = require('express');
const User = require('../models/user');

const register = express.Router();

register.post('/register', (req, res) => {
	let user = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	});
	user.save((err) => {
		if (err) {
			res.sendStatus(400);
		} else {
			res.send(true);
		}
	});
});

module.exports = register;
