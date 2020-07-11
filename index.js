const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const express = require('express');
const app = express();

if (!config.get('jwtPrivateKey')) {
	console.error('FATAL ERROR: jwtPrivateKey is not defined.');
	process.exit(1);
}

const users = require('./route/users');
const auth = require('./route/auth');

mongoose.connect('mongodb://localhost/access')
	.then(() => console.log('Connected to MongoDB...'))
	.catch(err => console.error('Could not connect to MongoDB'));

app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));