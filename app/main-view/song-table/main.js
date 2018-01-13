const SongRow = require('./song-row');

module.exports = {
	name: 'song-table',
	components: {
		'song-row': SongRow,
	},
	created() {
		this.$store.dispatch('loadSongs');
	},
	computed: {
		songs() {
			return this.$store.state.songs.data;
		}
	}
};
