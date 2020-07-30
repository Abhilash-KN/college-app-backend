const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const signin = express.Router();

signin.post('/signin', (req, res) => {
	User.findOne(
		{ email: req.body.email, password: req.body.password },
		(err, result) => {
			console.log(err, result);
			if (result) {
				const accessToken = jwt.sign(
					{
						name: result.name,
						email: result.email,
					},
					process.env.ACCESS_TOKEN_SECRET
				);
				const data = {
					loggedIn: true,
					token: accessToken,
				};
				res.send(data);
			} else {
				res.sendStatus(404);
			}
		}
	);
});

module.exports = signin;
