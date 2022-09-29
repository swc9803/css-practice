<template>
  <div v-if="loading">loading...</div>
  <div v-show="!loading" class="videoWrap">
    <video
      ref="video"
      src="https://assets.codepen.io/39255/output_960.mp4"
      playsinline="true"
    />
  </div>
  <div ref="controller" class="controller" />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const video = ref();
const controller = ref<HTMLDivElement>();
const loading = ref<boolean>(false);

onMounted(() => {
  window.scrollTo(0, 0);
  loading.value = true;

  function once(el: Element, event: any, fn: any, options: boolean) {
    const onceFn = function (this: string) {
      el.removeEventListener(event, onceFn);
      fn.apply(this, arguments);
    };
    el.addEventListener(event, onceFn, options);
    return onceFn;
  }

  //  비디오 로딩 후
  video.value.addEventListener("loadedmetadata", () => {
    loading.value = false;
    scrollAnimation.fromTo(
      video.value,
      { currentTime: 0 },
      { currentTime: video.value.duration || 1 }
    );
  });

  //   스크롤 컨트롤
  const scrollAnimation = gsap.timeline({
    defaults: { duration: 1 },
    scrollTrigger: {
      trigger: controller.value,
      //   start: "top top",
      scrub: 0.5,
    },
  });
});
</script>

<style lang="scss" scoped>
.videoWrap {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
  video {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
}
.controller {
  height: 500vh;
}
</style>
