const SongRow = require('./song-row');

module.exports = {
	name: 'song-table',
	components: {
		'song-row': SongRow,
	},
	data() {
		return {
			beingAdded: false,
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
			return this.$store.state.songs.data;
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
