<template>
  <div  class="note-to-show">
    lolokok
      <ul>
        <li class="note" v-for="note in notes"
        :key=note.id
        v-show="note.show"
        >
        <div class="title-and-button">
        <p class="show-title">{{ note.title }} </p>
        <div class="button-container">
        <button class="edit-button" @click="editNoteFun(note)">Edit note</button>
        <button @click="$emit('remove-note', note)">Delete note</button>
        </div>
        </div>
        <!-- <AddTagToNote
        @add-tag="MainAddTag($event, note.id)"
        /> -->
        <div class="main-block">
         <p class="show-content"> {{note.content}} </p>
         <div class="show-tags">
         <p v-for="tag in note.tags" :key=tag> #{{tag}}
           <button class="rm" @click="$emit('remove-tag', { noteId: note.id , Tag: tag })">
             &times;
           </button>
         </p>
         </div>
         </div>
        </li>
      </ul>
      </div>
</template>

<style scoped>
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
}
</style>
