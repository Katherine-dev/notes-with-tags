<template>
  <div class="add-note">
    <form @submit.prevent="onSubmit()">
       <div class="container">
         <span>Title: </span>
         <input class="title" type="text" v-model="editNoteObj.title" placeholder="Название...">
      </div>
      <div class="container">
       <span>Tags: </span>
       <input class="tags" type="text" v-model="editNoteObj.tags" placeholder="Теги...">
      </div>
      <div class="container content-input">
         <span>Content: </span>
         <textarea class="content" type="text" v-model="editNoteObj.content"
          placeholder="Содержимое..."/>
      </div>
      <div class="button-wrapper-bottom">
      <button type="submit">Submit &#10004;</button>
      </div>
    </form>
    </div>
</template>
<script lang="ts" >

import { Options, Vue } from 'vue-class-component';
import { mapGetters, mapActions, mapState } from 'vuex';

@Options({
  computed: {
    ...mapGetters({
      notes: 'notes/getNotes',
      addNote: 'addNote',
      editNote: 'editNote',
      editNoteObj: 'getEditNoteObj',
    }),
  },
  methods: {
    onSubmit(): void {
      if (this.addNote) {
        if (this.editNoteObj.title.trim() && this.editNoteObj.content.trim()
        && this.editNoteObj.length !== 0) {
          const newNote = {
            id: this.notes.length + 1,
            title: this.editNoteObj.title,
            content: this.editNoteObj.content,
            tags: this.editNoteObj.tags.split(','),
          };

          this.$store.commit('notes/addNote', newNote);
          this.$store.commit('tags/addTagWithNote', newNote);
          this.$store.commit('removePlaceholder');
        } else alert('Вы не ввели название или содержание заметки');
      } else if (this.editNote) {
        if (this.editNoteObj.title.trim() && this.editNoteObj.content.trim()
        && this.editNoteObj.length !== 0) {
          // console.log(typeof this.tags);
          const editedNote = {
            id: this.editNoteObj.id,
            title: this.editNoteObj.title,
            content: this.editNoteObj.content,
            tags: this.editNoteObj.tags.split(','),
          };

          this.$store.commit('notes/editNote', editedNote);
          this.$store.commit('tags/addTagWithNote', editedNote);
          this.$store.commit('removePlaceholder');
          this.$store.commit('showNoteActive');
        } else alert('Вы не ввели название или содержание заметки');
      }
      this.$store.commit('tags/saveTags');
      this.$store.commit('notes/saveNotes');
    },
  },
})
export default class AddingEditingNote extends Vue {

}
</script>

<style scoped>

 .add-note {
   padding-right: 350px;
 }
 .container {
  display: flex;
  width:100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-right: 100px;
 }
  .content-input {
   margin-top: 25px;
 }
 .tags {
  margin-left: 35px;
 }
 title, .tags {
  width: 100%;
 }
 .title {
   height:30px;
   margin-left: 40px;
   width: 100%;
 }
 .content {
  margin-left: 13px;
  resize: vertical;
  width: 100%;
  height: 200px;
 }
 .button-wrapper-bottom {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  }
  .button-wrapper-bottom button {
  padding: 5px;
  }
</style>
