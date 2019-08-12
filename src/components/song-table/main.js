import BSModal from '../bs-modal';

export default {
	name: 'song-table',
	components: {
		'bs-modal': BSModal,
	},
	data() {
		return {
			beingAdded: false,
			searchText: '',
			song: {
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
			this.$store.dispatch('createSong', this.song)
				.then(() => {
					this.resetSong();
				});
		},
		resetSong() {
			this.beingAdded = false;
			this.song.name = '';
			this.song.artist = '';
			this.song.album = '';
			this.song.genre = '';
			this.song.length = 0;
		},
	}
};
