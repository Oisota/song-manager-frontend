const SongRow = require('./song-row');

module.exports = {
	name: 'song-table',
	props: {
		songs: {
			type: Array,
			required: true,
		}
	},
	components: {
		'song-row': SongRow,
	},
};
