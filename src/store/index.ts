import { createStore } from 'vuex';
import note from '@/store/notes-store';

export default createStore({
  modules: {
    note,
  },
});
