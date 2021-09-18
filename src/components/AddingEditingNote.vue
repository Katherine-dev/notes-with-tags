<template>
  <div class="add-note">
    <form @submit.prevent="onSubmit()">
       <div class="container">
         <span>Title: </span>
         <input class="title" type="text" v-model="EditNote.title" placeholder="Название...">
      </div>
      <div class="container">
       <span>Tags: </span>
       <input class="tags" type="text" v-model="EditNote.tags" placeholder="Теги...">
      </div>
      <div class="container content-input">
         <span>Content: </span>
         <textarea class="content" type="text" v-model="EditNote.content"
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
import { mapGetters, mapActions } from 'vuex';

@Options({
  computed: {
    ...mapGetters({
      notes: 'notes/getNotes',
      addNote: 'addNote',
      editNote: 'editNote',
      editNoteObj: 'getEditNoteObj',
    }),
    // private EditNote = {
    //   id: this.editNoteObj.id,
    //   title: '',
    //   content: '',
    //   tags: '',
    // },
  },
  methods: {
    onSubmit(): void {
      if (this.addNote) {
        if (this.EditNote.title.trim() && this.EditNote.content.trim()) {
          const newNote = {
            id: this.notes.length + 1,
            title: this.EditNote.title,
            content: this.EditNote.content,
            tags: this.EditNote.tags.split(','),
          };

          this.$store.commit('notes/addNote', newNote);
          this.$store.commit('tags/addTagWithNote', newNote);

          this.EditNote.title = '';
          this.EditNote.content = '';
          this.EditNote.tags = '';
        } else alert('Вы не ввели название или содержание заметки');
      } else if (this.editNote) {
        if (this.EditNote.title.trim() && this.EditNote.content.trim()) {
          // console.log(typeof this.tags);
          const editedNote = {
            id: this.id,
            title: this.title,
            content: this.content,
            tags: this.tags.split(','),
          };

          this.$store.commit('notes/addNote', editedNote);

          this.EditNote.id = 0;
          this.EditNote.title = '';
          this.EditNote.content = '';
          this.EditNote.tags = '';
        } else alert('Вы не ввели название или содержание заметки');
      }
    },
  },
})
export default class ElementList extends Vue {

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
