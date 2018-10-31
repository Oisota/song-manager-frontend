/* eslint no-process-env: 0 */
const config = {};

switch (process.env.NODE_ENV) {
	case 'production':
		config.ENV = 'production';
		config.HISTORY_MODE = 'history';
		config.API_URL = window.location.origin + '/api';
		break;
	default:
		config.ENV = 'development';
		config.HISTORY_MODE = 'hash';
		config.API_URL = 'http://localhost:6505/api';
}

export default config;
