<template>
  <div class="container">
    <aside class="container__aside">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Molestias quaerat ea et vero aperiam hic dolorem beatae,
      laboriosam mollitia at! Soluta distinctio veniam ut expedita
      dolorem eos dolorum ex repudiandae?
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

@Options({
  components: {
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
}

.container {
  display: flex;
}

.container__aside {
  flex: 0;
  min-width: 210px;
  width: 210px;
}

.container__main {
  flex: 1;
}
</style>
