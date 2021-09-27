import { Module } from 'vuex';

interface ITagsStore {
  tags: Array<string>
}

const store: Module<ITagsStore, any> = {
  state: {
    tags: ['tag-1', 'tag-2'],
  },
  mutations: {
    // addNote(state, payload: ITag) {
    //   state.tags.push(payload);
    // },
    removeTag(state,
      payload: {
        note:{ id: number, title: string; content: string; tags: Array<string>},
        allNotesTags: Array<string>}) {
      console.log(`heheh${payload.note.title}`);

      payload.note.tags.forEach((tag: string) => {
        if (payload.allNotesTags.filter((t) => t === tag).length === 1) {
          state.tags = state.tags.filter((t) => t !== tag);
        }
        localStorage.removeItem('notes');
      });
      // }
    },
    removeTagButton(state, payload: { tag:string, allNotesTags: Array<string>}) {
      console.log(`heheh${payload.tag}`);

      if (payload.allNotesTags.filter((t) => t === payload.tag).length === 1) {
        state.tags = state.tags.filter((t) => t !== payload.tag);
      }
      localStorage.removeItem('notes');

      // }
    },
    addTagWithNote(state,
      note: { id: number, title: string; content: string; tags: Array<string>}) {
      // eslint-disable-next-line no-restricted-syntax
      for (const addTag of note.tags) {
        if (!state.tags.includes(addTag)) {
          state.tags.push(addTag);
        }
      }
      localStorage.removeItem('tags');
      console.log('добавлен тег');
    },
    addOneTag(state, addTag: string) {
      if (!state.tags.includes(addTag)) {
        state.tags.push(addTag);
      }
      localStorage.removeItem('tags');
    },
    saveTags(state) {
      const parsed = JSON.stringify(state.tags);
      localStorage.setItem('tags', parsed);
    },
    initialiseTags(state) {
      const localTags = localStorage.getItem('tags');
      if (localTags) {
        state.tags = JSON.parse(localTags);
      } else {
        const parsed = JSON.stringify(state.tags);
        localStorage.setItem('tags', parsed);
      }
    },
  },
  getters: {
    getTags(state) {
      console.log(`form ts${state.tags}`);
      return state.tags;
    },
  },
  actions: {

  },

};

export default store;
