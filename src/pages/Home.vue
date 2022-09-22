<template>
  <div>
    <h1>css-practice</h1>
    <nav>
      <ul>
        <!-- <li v-for="(menu, i) in menus" :key="menu">
          <router-link :to="{ path: menus[i] }">
            {{ menus[i] }}
          </router-link>
        </li> -->
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
li {
  font-size: 2em;
  margin: 2%;
  list-style: none;
}
</style>
