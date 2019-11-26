import axios from 'axios';

const http = axios.create({
	baseURL: `${window.location.href}api/v1`,
	timeout: 5000,
	responseType: 'json',
	headers: {
		'Content-Type': 'application/json',
	}
});

export default http;
