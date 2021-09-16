import { createStore } from 'vuex';
import notes from '@/store/notes-store';
import tags from '@/store/tags-store';

export default createStore({
  state: {
    selectedTag: '',
    addNote: false,
    showNote: false,
    editNote: false,
  },
  getters: {
    getSelectedTag(state) {
      return state.selectedTag;
    },
    addNote(state) {
      return state.addNote;
    },
    showNote(state) {
      return state.showNote;
    },
    editNote(state) {
      return state.editNote;
    },
  },
  actions: {
  },
  mutations: {
    changeTag(state, value: string) {
      state.selectedTag = value;
    },
    addNoteState(state) {
      state.addNote = true;
      state.showNote = false;
      state.editNote = false;
    },
    onHide(state) {
      console.log('from index');
      state.showNote = true;
      state.addNote = false;
      state.editNote = false;
    },
  },
  modules: {
    notes: {
      namespaced: true,
      ...notes,
    },
    tags: {
      namespaced: true,
      ...tags,
    },
  },
});
