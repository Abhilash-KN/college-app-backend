const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticate = (req, res, next) => {
	const header = req.headers.authorization;

	const token = header.split(' ')[1];

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if (err) {
			return res.send('FAILED');
		}
		req.body.email = user.email;
		req.body.name = user.name;
		next();
	});
};

module.exports = authenticate;
