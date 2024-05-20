<script setup>
import { Carousel, Slide } from '@jambonn/vue-concise-carousel';
import '@jambonn/vue-concise-carousel/lib/vue-concise-carousel.css';
import Btn from '@/components/_shared/Btn.vue';

const services = [
    {
        name: 'Діагностика та технічне обслуговування',
        text: 'Саме тут Ви знайдете всі компанії міста з детальною інформацією - адресами, контактами, графіком роботи, цінами.',
        linkTo: '/services/5',
        image: 'src/assets/img/repairman_looks_online_new_car_parts_1.webp',
    },
    {
        name: 'Діагностика та технічне обслуговування',
        text: 'Саме тут Ви знайдете всі компанії міста з детальною інформацією - адресами, контактами, графіком роботи, цінами.',
        linkTo: '/services/5',
        image: 'src/assets/img/peter_poluch_gpoq5dzcpey_unsplash_1.webp',
    },
    {
        name: 'Діагностика та технічне обслуговування',
        text: 'Саме тут Ви знайдете всі компанії міста з детальною інформацією - адресами, контактами, графіком роботи, цінами.',
        linkTo: '/services/5',
        image: 'src/assets/img/top-view-man-repairing-car 2.png',
    },
    {
        name: 'Діагностика та технічне обслуговування',
        text: 'Саме тут Ви знайдете всі компанії міста з детальною інформацією - адресами, контактами, графіком роботи, цінами.',
        linkTo: '/services/5',
        image: 'src/assets/img/peter_poluch_gpoq5dzcpey_unsplash_1.webp',
    },
]
</script>

<template>
    <section class="bg-black">
        <Carousel :per-page-custom="[[0, 1]]" paginationActiveColor="#4D7DF9" :paginationSize="20" paginationPosition="bottom-overlay" :loop="true" :autoplay="true">
            <Slide v-for="(service, index) in services" :key="index" :data-index="index - 1">
                <div class="relative h-screen px-4">
                    <img :src="service.image" :alt="service.name" class="absolute pointer-events-none top-0 left-0 w-full h-full object-cover object-center z-0">

                    <div class="container mx-auto relative z-10 flex flex-col justify-center h-full">
                        <h1 class="text-white md:text-3xl lg:text-6xl font-bold font-['Roboto Condensed'] uppercase mb-1 text_shadow">
                            {{ service.name }}
                        </h1>

                        <p class="text-white text-base xl:text-2xl font-light mb-6 text_shadow">
                            {{ service.text }}
                        </p>

                        <Btn customClass="!w-[230px] !ml-0" isLink :linkTo="service.linkTo">Переглянути послугу</Btn>
                    </div>
                </div>
            </Slide>
        </Carousel>
    </section>
</template>
