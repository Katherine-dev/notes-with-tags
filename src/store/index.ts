import { createStore } from 'vuex';
import notes from '@/store/notes-store';
import tags from '@/store/tags-store';

export default createStore({
  state: {
    selectedTag: '',
  },
  getters: {
    getSelectedTag(state) {
      return state.selectedTag;
    },
  },
  actions: {

  },
  mutations: {
    changeTag(state, value: string) {
      state.selectedTag = value;
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
