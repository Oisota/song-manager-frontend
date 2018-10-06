/* eslint no-process-env: 0 */
switch (process.env.NODE_ENV) {
	case 'production':
		exports.ENV = 'production';
		exports.HISTORY_MODE = 'history';
		exports.API_URL = window.location.origin + '/api';
		break;
	default:
		exports.ENV = 'development';
		exports.HISTORY_MODE = 'hash';
		exports.API_URL = 'http://localhost:6505/api';
}
