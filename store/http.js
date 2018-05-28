const axios = require('axios');

const store = require('./store');

const http = axios.create({
	baseURL: 'http://localhost:6505/api',
	timeout: 5000,
	responseType: 'json',
	headers: {
		'Content-Type': 'application/json',
	}
});

http.interceptors.request.use(config => {
	const token = store.state.user.token;
	config.headers['Authorization'] = `Bearer ${token}`;
	return config;
}, error => {
	return Promise.reject(error);
});

/*
http.interceptors.response.use(response => {
	return response;
}, error => {
	store.dispatch('addAlert', error);
});
*/

module.exports = http;
