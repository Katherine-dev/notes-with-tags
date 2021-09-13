<template>
  <div class="combobox">
    <select class="default-option" v-model="selected" @change="action($event)">
        <option disabled value="">Choose a tag</option>
        <option v-for="tag in tags"
        :key="tag"
        >{{tag}}</option>
      </select>
  </div>
</template>

<script lang="ts" >
import { Options, Vue } from 'vue-class-component';

  @Options({
    computed: {
      getTags() {
        return this.$store.getters['tags/getTags'];
      },
    },
  })
export default class Combobox extends Vue {
  created() {
    console.log(this.$options.getTags);
  }

  private tags: Array<string> = []

  private selected = '';

  // @Prop({
  //   ['tags']
  // })
  // methods: {
  //   action(event) {
  //     console.log(event.target.value);
  //     this.$emit('change-tag', event.target.value);
  //   },
  // },
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

function Component(arg0: { computed: { foo: import("vuex").Computed; }; }) {
  throw new Error('Function not implemented.');
}
