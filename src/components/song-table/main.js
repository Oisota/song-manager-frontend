import BSModal from '../bs-modal';

export default {
	name: 'song-table',
	components: {
		'bs-modal': BSModal,
	},
	data() {
		return {
			song: {
				id: null,
				name: '',
				artist: '',
				album: '',
				genre: '',
				length: 0,
				index: null,
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
		},
		addEditTitle() {
			return this.song.id ? 'Edit Song' : 'Add Song';
		},
	},
	methods: {
		saveSong() {
			if (this.song.id) {
				this.updateSong();
			} else {
				this.createSong();
			}
		},
		async createSong() {
			await this.$store.dispatch('songs/create', this.song);
			this.resetSong();
		},
		updateSong() {
			this.$store.dispatch('songs/update', this.song);
		},
		deleteSong() {
			this.$store.dispatch('songs/delete', this.song);
		},
		edit(index) {
			const song = this.songs[index];
			this.song.id = song.id;
			this.song.name = song.name;
			this.song.artist = song.artist;
			this.song.album = song.album;
			this.song.genre = song.genre;
			this.song.length = song.length;
			this.song.index = index;
		},
		resetSong() {
			this.song.id = null,
			this.song.name = '';
			this.song.artist = '';
			this.song.album = '';
			this.song.genre = '';
			this.song.length = 0;
			this.song.index = null;
		},
	}
};
