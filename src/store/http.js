import axios from 'axios';
import config from '../config';

const http = axios.create({
	baseURL: config.API_URL,
	timeout: 5000,
	responseType: 'json',
	headers: {
		'Content-Type': 'application/json',
	}
});

export default http;
