const axios = require('axios');
const config = require('../config');

const http = axios.create({
	baseURL: config.API_URL,
	timeout: 5000,
	responseType: 'json',
	headers: {
		'Content-Type': 'application/json',
	}
});

module.exports = http;
