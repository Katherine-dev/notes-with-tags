<template>
  <div class="container">
    <aside class="container__aside">
      <Combobox/>
      <ElementList/>
    </aside>
    <main class="container__content">
      <div class="top_wrapper">
        <h1>Notes-with-tags</h1>
        <button class="add_button" @click="addNoteFun()">Add new note</button>
      </div>
      <div class="main_content">
      <div class="start_stub" v-if="!showNote&&!addNote&&!editNote">
        You can create a note or choose one by tag
      </div>
      <AddingEditingNote v-else-if="addNote||editNote"/>
      <ReadingNote v-else-if="showNote"/>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapGetters } from 'vuex';
import Combobox from '@/components/Combobox.vue';
import ElementList from '@/components/ElementList.vue';
import ReadingNote from '@/components/ReadingNote.vue';
import AddingEditingNote from '@/components/AddingEditingNote.vue';

@Options({
  components: {
    Combobox,
    ElementList,
    ReadingNote,
    AddingEditingNote,
  },
  computed: {
    ...mapGetters({
      storeNotes: 'notes/getNotes',
      addNote: 'addNote',
      showNote: 'showNote',
      editNote: 'editNote',
    }),
  },
  methods: {
    addNoteFun(): void {
      this.$store.commit('addNoteState');
      this.$store.commit('removePlaceholder');
    },
  },
  created() {
    console.log(Array.from(this.storeNotes)[0]);
  },
  mounted() {
    this.$store.commit('tags/saveTags');
    this.$store.commit('notes/saveNotes');
  },
})

export default class App extends Vue {
}
</script>

<style>
html,
body,
#app,
.container {
  margin: 0;
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
.container {
  display: flex;
}

.container__aside {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 0;
  min-width: 210px;
  width: 210px;
  background-color: #e0e0e0;
}

.container__main {
  flex: 1;
}
.container__content {
  width: 100%;
  height: 100%;
  margin-top: 40px;
}
.top_wrapper {
  display: flex;
  margin-bottom: 20px;
  margin-right: 65px;
  margin-left: 30px;
  justify-content: space-between;
  align-items: center;
 }
 .main_content {
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  padding: 10px;
  margin: 10px;
  background-color: #f8f8f8;
 }
 .add_button {
  height: 30px;
 }
 .start_stub {
   text-align: center;
  }

</style>
