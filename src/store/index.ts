import { createStore } from 'vuex';
import notes from '@/store/notes-store';
import tags from '@/store/tags-store';

export default createStore({
  state: {
    selectedTag: '',
    addNote: false,
    showNote: false,
    editNote: false,
    editNoteObj: {
      id: 0,
      title: '',
      content: '',
      tags: [''],
    },
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
    getEditNoteObj(state) {
      return state.editNoteObj;
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
    showNoteActive(state) {
      console.log('from index');
      state.showNote = true;
      state.addNote = false;
      state.editNote = false;
    },
    editNoteActive(state,
      editNote: { id: number; title: string; content: string; tags: string; }) {
      state.editNote = true;
      state.addNote = false;
      state.showNote = false;

      state.editNoteObj.id = editNote.id;
      state.editNoteObj.title = editNote.title;
      state.editNoteObj.content = editNote.content;
      state.editNoteObj.tags = editNote.tags;
    },
    defaultState(state) {
      state.editNote = false;
      state.addNote = false;
      state.showNote = false;
    },
    removePlaceholder(state) {
      state.editNoteObj.id = 0;
      state.editNoteObj.title = '';
      state.editNoteObj.content = '';
      state.editNoteObj.tags = [''];
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
