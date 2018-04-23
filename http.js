const axios = require('axios');

const state = require('./store/state');

const http = axios.create({
	baseURL: 'http://localhost:6505/api',
	timeout: 5000,
	responseType: 'json',
	headers: {
		'Content-Type': 'application/json',
	}
});

http.interceptors.request.use(config => {
	config.headers.authorization = `Bearer ${state.user.token}`;
	return config;
}, error => {
	console.log(error);
});

module.exports = http;
