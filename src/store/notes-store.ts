import { Module } from 'vuex';

interface INote {
    content: string
}
interface INotesStore {
  notes: Array<INote>
}

const store: Module<INotesStore, any> = {
  state: {
    notes: [{ content: 'note-1' }],
  },
  mutations: {
    addNote(state, payload: INote) {
      state.notes.push(payload);
    },
  },
  getters: {
    getNotes(state) {
      console.log(`form ts${state.notes}`);
      return state.notes;
    },
  },
  actions: {

  },

};

export default store;
