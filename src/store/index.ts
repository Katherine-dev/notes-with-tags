import { createStore } from 'vuex';
import notes from '@/store/notes-store';
import tags from '@/store/tags-store';

export default createStore({
  state: {
    selfNote: ['lalal'],
  },
  getters: {
    getself(state) {
      return state.selfNote;
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
