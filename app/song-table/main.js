const SongRow = require('./song-row');
const LengthInput = require('../length-input');

module.exports = {
	name: 'song-table',
	components: {
		'song-row': SongRow,
		'length-input': LengthInput,
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
				length: 0,
			}
		};
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
				this.$refs.songName.focus();
			});
		},
		add() {
			this.$store.dispatch('createSong', this.newSong)
				.then(() => {
					this.cancel();
				});
		},
		cancel() {
			this.beingAdded = false;
			this.newSong.name = '';
			this.newSong.artist = '';
			this.newSong.album = '';
			this.newSong.genre = '';
			this.newSong.length = 0;
		},
	}
};
