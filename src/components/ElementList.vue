<template>
  <div class= "element" v-for="note in storeNotes"
        :key="note"
        v-show="note.tags.includes(selectedTag)&&selectedTag!=''"
        >{{note.content}}
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
