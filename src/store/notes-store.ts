import { Module } from 'vuex';

interface INote {
    content: string
}
interface INotesStore {
  notes: Array<INote>
}

const store: Module<INotesStore, any> = {
  state: {
    notes: [],
  },
  mutations: {
    addNote(state, payload: INote) {
      state.notes.push(payload);
    },
  },
  getters: {
    getNotes(state) {
      return state.notes;
    },
  },
  actions: {

  },

};

export default store;
