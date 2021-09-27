import { Module } from 'vuex';

interface INote {
  id: number,
  title: string,
  content: string,
  show: boolean,
  tags: Array<string>
}
interface INotesStore {
  notes: Array<INote>
}

const store: Module<INotesStore, any> = {
  state: {
    notes: [{
      id: 1, title: 'Note1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus justo ut lobortis commodo. Nullam blandit tempus vulputate. In dapibus vulputate velit, sit amet scelerisque sapien lobortis vitae. Nunc interdum hendrerit odio, nec tempus turpis feugiat a. Proin condimentum ligula nisl, commodo suscipit mi mattis quis. Suspendisse nisi velit, convallis at auctor sit amet, malesuada a lacus. Suspendisse sed nunc elit. Pellentesque condimentum elit ut sagittis sodales. ', show: false, tags: ['tag-1'],
    },
    {
      id: 2, title: 'Note2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus justo ut lobortis commodo. Nullam blandit tempus vulputate. In dapibus vulputate velit, sit amet scelerisque sapien lobortis vitae. Nunc interdum hendrerit odio, nec tempus turpis feugiat a. Proin condimentum ligula nisl, commodo suscipit mi mattis quis. Suspendisse nisi velit, convallis at auctor sit amet, malesuada a lacus. Suspendisse sed nunc elit. Pellentesque condimentum elit ut sagittis sodales.', show: false, tags: ['tag-1', 'tag-2'],
    }],
  },
  mutations: {
    addNote(state, payload: INote) {
      state.notes.push(payload);
      localStorage.removeItem('notes');
    },
    showNote(state, payload:number) {
      state.notes.forEach((element) => {
        // eslint-disable-next-line no-param-reassign
        element.show = (element.id === payload);
      });
    },
    removeNote(state, noteToRemove : INote) {
      state.notes = state.notes.filter((t) => t.id !== noteToRemove.id);
      localStorage.removeItem('notes');
    },
    editNote(state, editNote: INote) {
      console.log('edit from notes-store');
      // eslint-disable-next-line no-restricted-syntax
      for (const note of state.notes) {
        if (note.id === editNote.id) {
          note.title = editNote.title;
          note.content = editNote.content;
          note.tags = editNote.tags;
          note.show = true;
        }
      }
      localStorage.removeItem('notes');
    },
    removeTagFromNote(state,
      payload: {myEditNote: INote, tag: string }) {
      // console.log(payload.noteId);
      // const noteToRemoveTag = state.notes.filter((note) => note.id === payload.noteId)[0];
      // console.log(noteToRemoveTag);
      // state.notes[payload.note.i - 1].tags.filter((t) => t !== payload.tag);
      // eslint-disable-next-line no-restricted-syntax
      for (const note of state.notes) {
        if (note.id === payload.myEditNote.id) {
          note.tags = note.tags.filter((t) => {
            console.log(t === payload.tag);
            return t !== payload.tag;
          });
          console.log(payload.tag);
          console.log(note.tags);
        }
      }
      localStorage.removeItem('notes');
    },
    addTagToNote(state,
      payload: {noteId: number, tag: string }) {
      // console.log(payload.noteId);
      // const noteToRemoveTag = state.notes.filter((note) => note.id === payload.noteId)[0];
      // console.log(noteToRemoveTag);
      // state.notes[payload.note.i - 1].tags.filter((t) => t !== payload.tag);
      // eslint-disable-next-line no-restricted-syntax
      for (const note of state.notes) {
        if (note.id === payload.noteId) {
          if (!note.tags.includes(payload.tag)) {
            note.tags.push(payload.tag);
          }
        }
      }
      localStorage.removeItem('notes');
    },
    saveNotes(state) {
      const parsed = JSON.stringify(state.notes);
      localStorage.setItem('notes', parsed);
    },
    initialiseNotes(state) {
      const localNotes = localStorage.getItem('notes');
      if (localNotes) {
        state.notes = JSON.parse(localNotes);
      } else {
        const parsed = JSON.stringify(state.notes);
        localStorage.setItem('notes', parsed);
      }
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
