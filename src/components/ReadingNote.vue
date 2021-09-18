<template>
  <div  class="note-to-show">
      <ul>
        <li class="note" v-for="note in notes"
        :key=note.id
        v-show="note.show"
        >
        <div class="title-and-button">
        <p class="show-title">{{ note.title }} </p>
        <div class="button-container">
        <button class="edit-button" @click="editNoteFun(note)">Edit note</button>
        <button @click="getAllTags(note)">Delete note</button>
        </div>
        </div>
        <!-- <AddTagToNote
        @add-tag="MainAddTag($event, note.id)"
        /> -->
        <div class="main-block">
         <p class="show-content"> {{note.content}} </p>
         <div class="show-tags">
         <p class="tag" v-for="tag in note.tags" :key=tag> #{{tag}}
           <button class="rm" @click="removeTag({ noteId: note.id , Tag: tag })">
             &times;
           </button>
         </p>
         </div>
         </div>
        </li>
      </ul>
      </div>
</template>

<script lang="ts" >

import { Options, Vue } from 'vue-class-component';
import { mapGetters, mapActions } from 'vuex';

@Options({
  computed: {
    ...mapGetters({
      notes: 'notes/getNotes',
    }),
  },
  methods: {
    editNoteFun(editNote : { id: number, title: string; content: string; tags: Array<string>}) {
      const myEditNote = {
        id: editNote.id,
        title: editNote.title,
        content: editNote.content,
        tags: editNote.tags.join(),
      };
      this.$store.commit('editNoteActive', myEditNote);
      this.$store.commit('notes/editNote', myEditNote);
    },
    getAllTags(note: { id: number, title: string; content: string; tags: Array<string>}) {
      let allNotesTags: Array<string> = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const notee of this.notes) {
        allNotesTags = allNotesTags.concat(notee.tags);
        console.log(allNotesTags);
      }
      this.removeNote(note, allNotesTags);
    },
    removeNote(note: { id: number, title: string; content: string; tags: Array<string>},
      allNotesTags: Array<string>) {
      this.$store.commit('notes/removeNote', note);
      this.$store.commit('notes/removeNotewithTag', allNotesTags);
      this.$store.commit('defaultState');
    },
  },
})
export default class ElementList extends Vue {
}
</script>

<style scoped>

.title-and-button {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.button-container {
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: flex-end;
  padding: 5px;
}
.edit-button {
  margin-right: 20px;
}
.show-title {
  color: rgb(37, 26, 196);
  font-size: 25px;
  font-weight: 500;

}

.rm {
  background:rgb(37, 26, 196);
    color: #fff;
    border-radius: 50%;
}
.note-to-show {
  flex-direction: row;
}
.note-to-show, .note-to-show ul {
  display: flex;
  height:100%;
  width:100%;
}
.note-to-show ul li {
  width: 100%;
}

.show-content, .show-title  {
  text-align:justify;
}
.show-content {
  white-space: pre-line;
  margin-right: 50px;
}
.note {
  list-style-type: none;
  margin-left: 20px;
  margin-right: 55px;
}
.main-block {
  display: flex;
}
.show-tags {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  color: rgb(37, 26, 196);
}
.tag {
  margin: 2px;
}
</style>
