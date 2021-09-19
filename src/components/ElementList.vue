<template>
  <div class= "element" v-for="note in storeNotes"
        :key="note"
        v-show="note.tags.includes(selectedTag)&&selectedTag!=''"
        v-on:click="showNoteActive(note.id,storeNotes)"
        >{{note.title}}
  </div>
</template>

<script lang="ts" >

import { Options, Vue } from 'vue-class-component';
import { mapGetters, mapActions } from 'vuex';

@Options({
  computed: {
    ...mapGetters({
      storeNotes: 'notes/getNotes',
      storeTags: 'tags/getTags',
      selectedTag: 'getSelectedTag',
    }),
  },
  methods: {
    showNoteActive(noteId: number) {
      // тут я вызываю две мутации - для index и notes-store
      // первая- для смены общего состояния (отрисовки)
      // вторая- для изменения поля конкретного объекта 'show'
      this.$store.commit('showNoteActive');
      this.$store.commit('notes/showNote', noteId);
      this.$store.commit('removePlaceholder');
    },
  },
})
export default class ElementList extends Vue {}

</script>

<style scoped>
.el-list {
  margin-top: 20px;
}
.element {
  margin: 0 auto;
  text-decoration: none;
  font-size: 15px;
  color: #818181;
  display: block;
}

.element:hover {
  color: #a9cef8;
}
</style>
