<template>
  <div class="container">
    <div class="skillWrapper">
      <div
        v-for="skill in skills"
        v-show="skill.isVisible"
        :key="skill.id"
        class="skill"
        @click="toggle(skill)"
      >
        {{ skill.title }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const skills = ref([
  {
    title: "vue",
    src: "",
    isVisible: true,
  },
  {
    title: "three",
    src: "",
    isVisible: true,
  },
  {
    title: "pixi",
    src: "",
    isVisible: true,
  },
  {
    title: "canvas",
    src: "",
    isVisible: true,
  },
  {
    title: "canvas",
    src: "",
    isVisible: true,
  },
]);

const toggle = (skill) => {
  skill.isVisible = !skill.isVisible;
};
</script>

<style lang="scss" scoped>
.container {
  .skillWrapper {
    .skill {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(214, 214, 214);
      &:nth-child(1) {
        transform: translate(-50%, -50%);
        background: yellow;
      }
      &:nth-child(2) {
        transform: translate(-25%, -25%);
        background: green;
      }
      &:nth-child(3) {
        transform: translate(0, 0);
        background: black;
      }
      &:nth-child(4) {
        transform: translate(25%, 25%);
        background: blue;
      }
      &:nth-child(5) {
        transform: translate(50%, 50%);
        background: red;
      }
    }
  }
}
</style>
