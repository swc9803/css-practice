<template>
  <div>
    <canvas ref="canvasRef" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// import { Wave } from "../composable/wave.js";

const canvasRef = ref();

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.speed = 0.1;
    this.cur = 0;
    this.max = Math.random() * 100 + 150;
  }
  update() {
    this.cur += this.speed;
    this.y = this.fixedY + Math.sin(this.cur) * this.max;
  }
}
class Wave {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.speed = 0.1;
    this.cur = 0;
    this.max = Math.random() * 100 + 150;
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;
    this.centerx = this.stageWidth / 2;
    this.centery = this.stageHeight / 2;
    this.point = new Point(this.centerx, this.centery);
  }
  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "#ff0000";

    this.point.update();

    ctx.arc(this.point.x, this.point.y, 30, 0, 2 * Math.PI);
    ctx.fill();
  }
}
class App {
  constructor() {
    this.canvas = canvasRef.value;
    this.ctx = this.canvas.getContext("2d");

    this.wave = new Wave();

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();
    requestAnimationFrame(this.animate.bind(this));
  }
  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);

    this.wave.resize();
  }
  animate() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.wave.draw(this.ctx);

    requestAnimationFrame(this.animate.bind(this));
  }
}
onMounted(() => {
  new App();
});

// Point
// class Point {
//   constructor(index, x, y) {
//     this.x = x;
//     this.y = y;
//     this.fixedY = y;
//     this.speed = 0.1;
//     this.cur = index;
//     this.max = Math.random() * 100 + 150;
//   }
//   update() {
//     this.cur += this.speed;
//     this.y = this.fixedY + Math.sin(this.cur) * this.max;
//   }
// }

// // Wave
// class Wave {
//   constructor(index, totalPoints, color, x, y) {
//     this.index = index;
//     this.totalPoints = totalPoints;
//     this.color = color;
//     this.points = [];

//     this.x = x;
//     this.y = y;
//     this.fixedY = y;
//     this.speed = 0.1;
//     this.cur = 0;
//     this.max = Math.random() * 100 + 150;
//     this.stageWidth = document.body.clientWidth;
//     this.stageHeight = document.body.clientHeight;
//     this.centerx = this.stageWidth / 2;
//     this.centery = this.stageHeight / 2;
//   }
//   resize(stageWidth, stageHeight) {
//     this.stageWidth = stageWidth;
//     this.stageHeight = stageHeight;

//     this.centerX = stageWidth / 2;
//     this.centerY = stageHeight / 2;

//     this.pointGap = this.stageWidth / (this.totalPoints - 1);

//     this.init();
//   }
//   init() {
//     this.points = [];

//     for (let i = 0; i < this.totalPoints; i++) {
//       const point = new Point(this.index + i, this.pointGap * i, this.centerY);
//       this.points[i] = point;
//     }
//   }

//   draw(ctx) {
//     ctx.beginPath();
//     ctx.fillStyle = this.color;

//     let prevX = this.points[0].x;
//     let prevY = this.points[0].y;

//     ctx.moveTo(prevX, prevY);

//     for (let i = 1; i < this.totalPoints; i++) {
//       if (i < this.totalPoints - 1) {
//         this.points[i].update();

//         const cx = (prevX + this.points[i].x) / 2;
//         const cy = (prevY + this.points[i].y) / 2;

//         ctx.quadraticCurveTo(prevX, prevY, cx, cy);

//         prevX = this.points[i].x;
//         prevY = this.points[i].y;
//       }

//       ctx.lineTo(prevX, prevY);
//       ctx.lineTo(this.stageWidth, this.stageHeight);
//       ctx.lineTo(this.points[0].x, this.stageHeight);
//       ctx.fill();
//       ctx.closePath();
//     }
//   }
// }

// // WaveGroup
// class WaveGroup {
//   constructor() {
//     this.totalWaves = 3;
//     this.totalPoints = 6;

//     this.color = [
//       "rgba(0, 199, 255, 0.4)",
//       "rgba(0, 146, 199, 0.4)",
//       "rgba(0, 87, 158, 0.4)",
//     ];

//     this.waves = [];

//     for (let i = 0; i < this.totalWaves; i++) {
//       const wave = new Wave(i, this.totalPoints, this.color[i]);
//       this.waves[i] = wave;
//     }
//   }
//   resize(stageWidth, stageHeight) {
//     for (let i = 0; i < this.totalWaves; i++) {
//       const wave = this.waves[i];
//       wave.resize(stageWidth, stageHeight);
//     }
//   }

//   draw(ctx) {
//     for (let i = 0; i < this.totalWaves; i++) {
//       const wave = this.waves[i];
//       wave.draw(ctx);
//     }
//   }
// }

// // App
// class App {
//   constructor() {
//     this.canvas = canvasRef.value;
//     this.ctx = this.canvas.getContext("2d");

//     this.wavegroup = new WaveGroup();

//     window.addEventListener("resize", this.resize.bind(this), false);
//     this.resize();
//     requestAnimationFrame(this.animate.bind(this));
//   }
//   resize() {
//     this.stageWidth = document.body.clientWidth;
//     this.stageHeight = document.body.clientHeight;

//     this.canvas.width = this.stageWidth * 2;
//     this.canvas.height = this.stageHeight * 2;
//     this.ctx.scale(2, 2);

//     this.wavegroup.resize();
//   }
//   animate(t) {
//     this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

//     this.wavegroup.draw(this.ctx);

//     requestAnimationFrame(this.animate.bind(this));
//   }
// }
</script>

<style lang="scss" scoped>
div {
  height: 100vh;
  overflow: hidden;
  canvas {
    width: 100%;
    height: 100%;
    background: rgb(216, 189, 189);
  }
}
</style>
