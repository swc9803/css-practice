<template>
  <h1>grid</h1>
  <div class="container">
    <div v-for="item in 10" :key="item" class="item">{{ `Item${item}` }}</div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(150px, auto);
  gap: 10px;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #181818;
    font-size: 1.2rem;
    font-weight: bold;
    &:nth-child(2) {
      grid-column: 2 / -1;
      grid-row: 1 / 3;
    }
    &:nth-child(5n + 1) {
      background: #d7bee2;
    }
    &:nth-child(5n + 2) {
      background: #a9c7d8;
    }
    &:nth-child(5n + 3) {
      background: #c0df9f;
    }
    &:nth-child(5n + 4) {
      background: #f2e5a6;
    }
    &:nth-child(5n + 5) {
      background: #e89d9d;
    }
  }
}
</style>
