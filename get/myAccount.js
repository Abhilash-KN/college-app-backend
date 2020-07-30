const express = require('express');
const User = require('../models/user');
const authenticate = require('../authenticate');

const myAccount = express.Router();

myAccount.get('/myaccount', authenticate, (req, res) => {
	User.findOne({ email: req.body.email }, (err, result) => {
		if (result) {
			res.send(result);
		} else {
			res.sendStatus(404);
		}
	});
});

module.exports = myAccount;
