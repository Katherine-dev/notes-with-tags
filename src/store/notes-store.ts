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
    },
    showNote(state, payload:number) {
      state.notes.forEach((element) => {
        // eslint-disable-next-line no-param-reassign
        element.show = (element.id === payload);
      });
    },
    removeNote(state, noteToRemove : INote) {
      // noteToRemove.tags.forEach((tag) => {
      //   if (allNotesTags.filter((t) => t === tag).length === 1) {
      //     // localStorage.removeItem('tags');
      //     // localStorage.removeItem('notes');
      //   }
      // });
      state.notes = state.notes.filter((t) => t.id !== noteToRemove.id);
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
      // noteToRemoveTag.tags.filter((t) => t !== payload.tag);

      // if (payload.allNotesTags.filter((t) => t === tag).length === 1) {
      //   // localStorage.removeItem('tags');
      //   // localStorage.removeItem('notes');
      //   // this.tags = this.tags.filter((t) => t !== tag);
      //   noteToRemoveTag.tags = noteToRemoveTag.tags.filter((t) => t === tag);
      // }
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
