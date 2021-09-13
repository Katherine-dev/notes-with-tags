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
