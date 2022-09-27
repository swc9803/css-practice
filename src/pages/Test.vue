<template>
  <div>
    <canvas ref="canvasRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const canvasRef = ref();
</script>

<style lang="scss" scoped>
div {
  height: 100vh;
  overflow: hidden;
  canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
