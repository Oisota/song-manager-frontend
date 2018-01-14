const SongRow = require('./song-row');

module.exports = {
	name: 'song-table',
	components: {
		'song-row': SongRow,
	},
	data() {
		return {
			beingAdded: false,
			searchText: '',
			newSong: {
				name: '',
				artist: '',
				album: '',
				genre: '',
				minutes: 0,
				seconds: 0
			}
		}
	},
	created() {
		this.$store.dispatch('loadSongs');
	},
	computed: {
		songs() {
			if (this.searchText !== '') {
				return this.$store.state.songs.data
					.filter((function (song) {
						const name = song.name || '';
						const artist = song.artist || '';
						const album = song.album || '';
						const genre = song.genre || '';
						return name.toLowerCase().includes(this.searchText.toLowerCase())
							|| artist.toLowerCase().includes(this.searchText.toLowerCase())
							|| album.toLowerCase().includes(this.searchText.toLowerCase())
							|| genre.toLowerCase().includes(this.searchText.toLowerCase());
					}).bind(this));
			} else {
				return this.$store.state.songs.data
			}
		}
	},
	methods: {
		addSongMode() {
			this.beingAdded = true;
			this.$nextTick(function () {
				this.$el.querySelector('.song-name').children[0].focus();
			});
		},
		add() {
			this.$store.dispatch('createSong', {
				song: this.newSong
			});
		},
		cancel() {
			this.beingAdded = false;
		}
	}
};
