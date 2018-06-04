/* eslint no-process-env: 0 */
exports.env = process.env.NODE_ENV;
exports.historyMode = process.env.NODE_ENV === 'production' ? 'history' : 'hash';
