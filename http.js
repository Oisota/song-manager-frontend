const axios = require('axios');

const http = axios.create({
	baseURL: 'http://localhost:6505/api',
	timeout: 5000,
	responseType: 'json',
	headers: {
		'Content-Type': 'application/json',
	}
});

module.exports = http;
