<script setup>
import { EffectCreative, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-creative"

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
const modules = [EffectCreative, Pagination]
</script>

<template>
  <swiper
    class="hero-swiper"
    :modules="modules"
    :effect="'creative'"
    :watchSlidesProgress="true"
    :grabCursor="true"
    :loopAdditionalSlides="4"
    :slidesPerView="'auto'"
    :loop="true"
    :pagination="{
      clickable: true,
      el: '.hero-slider-pagination',
    }"
    :creativeEffect="{
      limitProgress: 3,
      progressMultiplier: 1.18,
      prev: {
        translate: [0, 0, -200],
        opacity: 0,
        scale: 0.6,
        shadow: false,
      },
      next: {
        scale: 0.95,
        opacity: 1,
        translate: ['25%', 0, -100],
      },
    }"
  >
    <swiper-slide v-for="item in items" :key="item.id" class="hero-slider__slide">
      <div class="hero-slider-img-wrap">
        <img :src="item.img" :alt="item.title" width="519" height="519" />
      </div>
    </swiper-slide>
  </swiper>
  <div class="hero-slider-pagination"></div>
</template>

<style scoped lang="scss">
.hero-swiper {
  width: 100%;
  height: 100%;
}

.hero-slider-img-wrap {
  aspect-ratio: 1;
  background: #c4c4c4;
  border-radius: 4px;
  box-shadow: 0 4px 50px 0 rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.hero-slider-pagination {
  position: absolute;
  left: 0;
  bottom: -29px;
  display: flex;
  gap: 11px;
  height: 5px;

  :deep(.swiper-pagination-bullet) {
    border-radius: 99px;
    width: 95px;
    height: 5px;
    background: rgba(255, 255, 255, 0.15);
    margin: 0;

    &.swiper-pagination-bullet-active {
      background: rgba(255, 255, 255, 0.5);
    }
  }
}

:deep(.swiper-slide) {
  aspect-ratio: 1;
  width: 38vw !important;
  max-width: 519px;
  max-height: 519px;
}
</style>
