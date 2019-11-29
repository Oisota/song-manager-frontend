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
		this.loadSongs();
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
		loadSongs() {
			this.$store.dispatch('songs/load');
		},
		async createSong() {
			await this.$store.dispatch('songs/create', this.song);
			this.$refs.editModal.hide();
		},
		async updateSong() {
			await this.$store.dispatch('songs/update', this.song);
			this.$refs.editModal.hide();
		},
		async deleteSong() {
			await this.$store.dispatch('songs/delete', this.song);
			this.$refs.deleteModal.hide();
		},
		saveSong() {
			if (this.song.id) {
				this.updateSong();
			} else {
				this.createSong();
			}
		},
		add() {
			this.$refs.editModal.show();
		},
		edit(index) {
			this.setSong(index);
			this.$refs.editModal.show();
		},
		remove(index) {
			this.setSong(index);
			this.$refs.deleteModal.show();
		},
		setSong(index) {
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
		cancelEdit() {
			this.$refs.editModal.hide();
		},
		cancelDelete() {
			this.$refs.deleteModal.hide();
		},
		focusForm() {
			this.$refs.songNameInput.focus(); // focus first form input
		},
		focusDeleteButton() {
			this.$refs.deleteButton.focus(); // focus first form input
		},
	}
};
