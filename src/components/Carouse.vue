<script setup>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
const slides = [
  { id: "1", title: "Vue 3 Introbhhhduction", content: "VueJS is a library" },
  { id: "2", title: "Vue 3 Components", content: "Know the components" },
  { id: "3", title: "Vue 3 Conditional", content: "Rendering Conditionally" },
  { id: "4", title: "Vue 3 Reactivity" },
  {
    id: "5",
    title: "Vue 3 Compute",
    content: "VueJS uses computed properties",
  },
];

const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 1,
    snapAlign: "start",
  },
  // 1024 and up
  1024: {
    itemsToShow: 1,
    snapAlign: "start",
  },
};
</script>
<template>
  <Carousel :wrap-around="true" :breakpoints="breakpoints">
    <Slide v-for="slide in slides" :key="slide.id">
      <div class="carousel__item">
        <h3>{{ slide.title }}</h3>
        <p>{{ slide.content }}</p>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>
