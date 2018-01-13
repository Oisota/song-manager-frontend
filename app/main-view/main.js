const SongTable = require('./song-table');

module.exports = {
	name: 'main-view',
	components: {
		'song-table': SongTable,
	},
	created() {
		this.loadSongs();
	},
	computed: {
		songs() {
			return this.$store.state.songs;
		}
	},
	methods: {
		loadSongs() {
			const self = this;
			$.ajax({
				url: 'http://127.0.0.1:6505/api/songs',
				method: 'GET',
				timeout: 5000,
				dataType: 'json'
			})
			.done((data, textStatus, jqXHR) => {
				self.$store.commit('loadSongs', data);
			})
			.fail((jqXHR, textStatus, errorThrown) => {
				console.log(errorThrown);
			});
		}
	},
};
