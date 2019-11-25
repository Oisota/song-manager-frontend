import BSModal from '../bs-modal';

export default {
	name: 'song-table',
	components: {
		'bs-modal': BSModal,
	},
	data() {
		return {
			beingAdded: false,
			selectedIndex: -1,
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
			return this.$store.state.songs.songs
				.map((s, i) => {
					const song = Object.assign({}, s);
					song.cls = this.selectedIndex === i ? 'table-active' : '';
					return song;
				});
		}
	},
	methods: {
		async addSong() {
			await this.$store.dispatch('songs/create', this.song);
			this.resetSong();
		},
		resetSong() {
			this.beingAdded = false;
			this.song.name = '';
			this.song.artist = '';
			this.song.album = '';
			this.song.genre = '';
			this.song.length = 0;
		},
		setSelected(index) {
			if (this.selectedIndex === index) {
				this.selectedIndex = -1;
			} else {
				this.selectedIndex = index;
			}
		},
	}
};
