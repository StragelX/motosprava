<script setup>
import { Carousel, Slide } from '@jambonn/vue-concise-carousel';
import '@jambonn/vue-concise-carousel/lib/vue-concise-carousel.css';

const servicesPics = [
    '/src/assets/img/repairman_looks_online_new_car_parts_1.webp',
    '/src/assets/img/peter_poluch_gpoq5dzcpey_unsplash_1.webp',
    '/src/assets/img/top-view-man-repairing-car 2.png',
    '/src/assets/img/peter_poluch_gpoq5dzcpey_unsplash_1.webp',
    '/src/assets/img/repairman_looks_online_new_car_parts_1.webp',
    '/src/assets/img/peter_poluch_gpoq5dzcpey_unsplash_1.webp',
    '/src/assets/img/top-view-man-repairing-car 2.png',
    '/src/assets/img/peter_poluch_gpoq5dzcpey_unsplash_1.webp',
    '/src/assets/img/repairman_looks_online_new_car_parts_1.webp',
    '/src/assets/img/peter_poluch_gpoq5dzcpey_unsplash_1.webp',
    '/src/assets/img/top-view-man-repairing-car 2.png',
    '/src/assets/img/peter_poluch_gpoq5dzcpey_unsplash_1.webp',

]
</script>

<template>
    <Carousel :per-page-custom="[[0, 1], [480, 2], [1000, 3], [1280, 4]]" :paginationEnabled="false" :loop="true" :autoplay="true">
        <Slide v-for="(pic, index) in servicesPics" :key="index" :data-index="index - 1">
            <div class="h-full">
                <img :src="pic" :alt="index" class="w-full h-full object-cover object-center">
            </div>
        </Slide>
    </Carousel>
</template>
