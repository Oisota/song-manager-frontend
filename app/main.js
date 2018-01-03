const store = require('../store');
const SongTable = require('./song-table');

module.exports = {
	components: {
		'song-table': SongTable,
	},
	data() {
		return store.state;
	},
};
