const SongRow = require('./song-row');

module.exports = {
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
