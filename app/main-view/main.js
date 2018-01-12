const store = require('../store');
const SongTable = require('./song-table');

module.exports = {
	components: {
		'song-table': SongTable,
	},
	data() {
		return {
			songs: []
		}
	},
	created() {
		this.loadSongs();
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
				self.songs = data.songs;
			})
			.fail((jqXHR, textStatus, errorThrown) => {
				console.log(errorThrown);
			});
		}
	},
};
