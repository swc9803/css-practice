<template>
  <div>
    <canvas ref="canvasRef" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const canvasRef = ref();

const PI2 = Math.PI * 2;

class Polygon {
  constructor(x, y, radius, sides) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.sides = sides;
    this.rotate = 0;
  }
  animate(ctx) {
    ctx.save();
    ctx.fillStyle = "#000";
    ctx.beginPath();

    const angle = PI2 / this.sides;

    ctx.translate(this.x, this.y);

    for (let i = 0; i < this.sides; i++) {
      const x = this.radius * Math.cos(angle * 1);
      const y = this.radius * Math.sin(angle * 1);
      i == 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }
}

class App {
  constructor() {
    this.canvas = canvasRef.value;
    this.ctx = this.canvas.getContext("2d");

    this.pixelRatio = window.devdevicePixelRatioice > 1 ? 2 : 1;

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));
  }
  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.polygon = new Polygon(
      this.stageWidth / 2,
      this.stageHeight / 2,
      this.stageHeight / 3,
      3
    );
  }
  animate() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.polygon.animate(this.ctx);

    window.requestAnimationFrame(this.animate.bind(this));
  }
}
onMounted(() => {
  new App();
});
</script>

<style lang="scss" scoped>
div {
  height: 100vh;
  overflow: hidden;
  canvas {
    width: 100%;
    height: 100%;
    background: rgb(101, 91, 91);
  }
}
</style>
