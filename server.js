const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const path = require('path');
require('dotenv').config();

const signin = require('./post/signin');
const register = require('./post/register');
const newBlog = require('./post/newBlog');
const newQuestion = require('./post/newQuestion');
const newComment = require('./post/newComment');
const newAnswer = require('./post/newAnswer');
const updateUser = require('./put/updateUser');
const blogList = require('./get/blogList');
const questionList = require('./get/questionList');
const myAccount = require('./get/myAccount');
const blog = require('./get/blog');
const question = require('./get/question');
const answers = require('./get/answers');
const comments = require('./get/comments');

mongoose.connect(process.env.DB_URI, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true,
});
mongoose.connection.on('connected', (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Connected successfully');
	}
});

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyparser.json());
app.use(cors());
app.use('/api', signin);
app.use('/api', register);
app.use('/api', newBlog);
app.use('/api', newQuestion);
app.use('/api', newComment);
app.use('/api', newAnswer);
app.use('/api', updateUser);
app.use('/api', blogList);
app.use('/api', questionList);
app.use('/api', myAccount);
app.use('/api', blog);
app.use('/api', question);
app.use('/api', answers);
app.use('/api', comments);

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT);
