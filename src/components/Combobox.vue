<template>
  <div class="combobox">
   <select class="default-option" v-model="selectedTag" @change="action($event)">
        <option disabled value="">Choose a tag</option>
        <option v-for="tag in storeTags"
        :key="tag"
        >{{tag}}</option>
      </select>
  </div>
</template>

<script lang="ts" >

import { Options, Vue } from 'vue-class-component';
import {
  mapGetters, mapActions, mapMutations, mapState,
} from 'vuex';

@Options({
  state: { selectedTag: String },
  computed: {
    ...mapGetters({
      storeTags: 'tags/getTags',
      selectedTag: 'getSelectedTag',
    }),
    // ...mapState({
    //   message: (state) => this.$store.state.selectedTag,
    // }),
    // ...mapMutations(['changeTag']),
  },
  created() {
    console.log('tags\n');
    console.log(this.storeTags);
  },
  methods: {
    action(event: { target: { value: any; }; }): void {
      console.log(`selected tag is ${event.target.value}`);
      this.$store.commit('changeTag', event.target.value);
    },
  },
})

export default class Combobox extends Vue {
}
</script>

<style scoped>
.default-option {
  padding: 6px 36px;
  width:100%;
 text-align-last: center;
}

.combobox {
  margin: 10px;
}

</style>
