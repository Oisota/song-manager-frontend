export default {
	name: 'song-table',
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
		this.$store.dispatch('songs/load');
	},
	computed: {
		songs() {
			return this.$store.state.songs.songs;
		}
	},
	methods: {
		addSong() {
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
