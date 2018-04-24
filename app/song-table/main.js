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
			return this.$store.state.songs;
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
			this.cancel();
		},
		cancel() {
			this.beingAdded = false;
			this.newSong.name = '';
			this.newSong.artist = '';
			this.newSong.album = '';
			this.newSong.genre = '';
			this.newSong.minutes = 0;
			this.newSong.seconds = 0;
		},
	}
};
