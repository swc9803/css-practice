<template>
  <div class="container">
    <header>header</header>
    <main><Gridarea /></main>
    <aside>side</aside>
    <footer>footer</footer>
  </div>
</template>

<script setup lang="ts">
import Gridarea from "@/pages/Gridarea.vue";
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 100px auto 50px; // header: 100px, content: auto, footer: 50px
  grid-template-areas:
    "header header"
    "main side"
    "footer footer";
  header,
  main,
  aside,
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header {
    background-color: black;
    color: white;
  }

  aside {
    background-color: #ff9d00;
  }

  footer {
    background-color: black;
    color: white;
  }
  header {
    grid-area: header;
  }
  main {
    grid-area: main;
  }
  aside {
    grid-area: side;
  }
  footer {
    grid-area: footer;
  }
}
</style>
