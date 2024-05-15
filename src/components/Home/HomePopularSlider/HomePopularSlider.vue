<script setup>
import { Carousel, Slide } from '@jambonn/vue-concise-carousel';
import '@jambonn/vue-concise-carousel/lib/vue-concise-carousel.css';
import HomePopularSliderRating from '@/components/Home/HomePopularSlider/HomePopularSliderRating.vue';
import Btn from '@/components/_shared/Btn.vue';

const services = [
    {
        rating: '4',
        name: 'Діагностика та технічне обслуговування',
        text: 'Саме тут Ви знайдете всі компанії міста з детальною інформацією - адресами, контактами, графіком роботи, цінами.',
        linkTo: '/services/5',
        image: 'src/assets/img/repairman_looks_online_new_car_parts_1.webp',
    },
    {
        rating: '3',
        name: 'Діагностика та технічне обслуговування',
        text: 'Саме тут Ви знайдете всі компанії міста з детальною інформацією - адресами, контактами, графіком роботи, цінами.',
        linkTo: '/services/5',
        image: 'src/assets/img/peter_poluch_gpoq5dzcpey_unsplash_1.webp',
    },
    {
        rating: '5',
        name: 'Діагностика та технічне обслуговування',
        text: 'Саме тут Ви знайдете всі компанії міста з детальною інформацією - адресами, контактами, графіком роботи, цінами.',
        linkTo: '/services/5',
        image: 'src/assets/img/top-view-man-repairing-car 2.png',
    },
    {
        rating: '4',
        name: 'Діагностика та технічне обслуговування',
        text: 'Саме тут Ви знайдете всі компанії міста з детальною інформацією - адресами, контактами, графіком роботи, цінами.',
        linkTo: '/services/5',
        image: 'src/assets/img/peter_poluch_gpoq5dzcpey_unsplash_1.webp',
    },
]
</script>

<template>
    <Carousel :per-page-custom="[[0, 1]]" paginationActiveColor="#4D7DF9" :paginationSize="20" paginationPosition="bottom-overlay" :loop="true" :autoplay="true">
        <Slide v-for="(service, index) in services" :key="index" :data-index="index - 1">
            <div class="bg-white flex items-stretch h-full">
                <div class="w-2/5 p-12">
                    <HomePopularSliderRating :rating="service.rating" />

                    <p class="text-zinc-800 text-4xl font-bold font-['Roboto Condensed'] mb-3">
                        {{ service.name }}
                    </p>

                    <p class="text-zinc-800 text-2xl font-light mb-6">
                        {{ service.text }}
                    </p>

                    <Btn customClass="!w-[230px] !ml-0" isLink :linkTo="service.linkTo">Переглянути послугу</Btn>
                </div>

                <div class="flex-1 overflow-hidden">
                    <img :src="service.image" :alt="service.name" class="w-full h-full object-cover object-center">
                </div>
            </div>
        </Slide>
    </Carousel>
</template>


<style>
.VueCarousel-pagination {}
</style>