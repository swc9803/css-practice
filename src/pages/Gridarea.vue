<template>
  <!-- <h1>gridarea</h1> -->
  <section class="container">
    <img
      src="https://images.unsplash.com/photo-1661933021480-75b708d5648f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
      class="image1"
    />
    <img
      src="https://images.unsplash.com/photo-1661912267451-712c028d74a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
      class="image2"
    />
    <img
      src="https://images.unsplash.com/photo-1661895581832-51c8e3538b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      class="image3"
    />
    <img
      src="https://images.unsplash.com/photo-1661836890977-1cc392056094?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      class="image4"
    />
    <img
      src="https://images.unsplash.com/photo-1661900980235-db5affe17d8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1567&q=80"
      class="image5"
    />
    <img
      src="https://images.unsplash.com/photo-1661901060088-32dbfeb040df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      class="image6"
    />
    <img
      src="https://images.unsplash.com/photo-1661890090656-6bf16bbdee4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
      class="image7"
    />
  </section>
</template>

<style lang="scss" scoped>
.container {
  padding: 5rem;
  //   background: black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 150px;
  gap: 1rem;
  grid-template-areas:
    "a a a"
    "b c c"
    "b d g"
    "e f g";
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .image1 {
    grid-area: a;
  }
  .image2 {
    grid-area: b;
  }
  .image3 {
    grid-area: c;
  }
  .image4 {
    grid-area: d;
  }
  .image5 {
    grid-area: e;
  }
  .image6 {
    grid-area: f;
  }
  .image7 {
    grid-area: g;
  }
}
</style>
