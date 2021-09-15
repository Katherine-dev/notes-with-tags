<template>
  <div class="container">
    <aside class="container__aside">
      <Combobox/>
      <ElementList/>
    </aside>
    <main class="container__content">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur a quasi animi officiis repellendus quisquam harum
      culpa voluptatum voluptatibus ab voluptas iste necessitatibus
      odit, placeat dolorem minima iure repellat. Facere!
    </main>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapGetters } from 'vuex';
import Combobox from '@/components/Combobox.vue';
import ElementList from '@/components/ElementList.vue';

@Options({
  components: {
    Combobox,
    ElementList,
  },
  computed: {
    storeNotes() {
      // return this.$store.getters.getself;
      return this.$store.getters['notes/getNotes'];
    },
  },
  created() {
    console.log(Array.from(this.storeNotes)[0]);
    // console.log(this.getDefaultNote);
  },
})

export default class App extends Vue {
  private notes: Array<string> = []

  private addNote(note: string) {
    this.notes.push(note);
  }

  private get getNotes() {
    return this.notes;
  }
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

.container {
  display: flex;
}

.container__aside {
  display: flex;
  flex-direction: column;
  flex: 0;
  min-width: 210px;
  width: 210px;
  background-color: #e0e0e0;
}

.container__main {
  flex: 1;
}
</style>
