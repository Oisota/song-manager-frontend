/* eslint no-process-env: 0 */
const config = {};

switch (process.env.NODE_ENV) {
	case 'production':
		config.ENV = 'production';
		config.API_URL = window.location.origin + '/api/v1';
		break;
	default:
		config.ENV = 'development';
		config.API_URL = 'http://localhost:6505/api/v1';
}

export default config;
