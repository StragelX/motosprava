<script setup>
import { useLink } from 'vue-router';
import SectionHeader from '@/components/_shared/SectionHeader.vue';
import HomeOneService from '@/components/Home/HomeOneService.vue';

const services = [
    {
        name: 'Діагностика',
        useLink: '/services/1',
        image: 'src/assets/img/services/s1.svg',
    },
    {
        name: 'Планове ТО',
        useLink: '/services/2',
        image: 'src/assets/img/services/s2.svg',
    },
    {
        name: 'Двигун',
        useLink: '/services/3',
        image: 'src/assets/img/services/s3.svg',
    },
    {
        name: 'Рульове',
        useLink: '/services/4',
        image: 'src/assets/img/services/s4.svg',
    },
    {
        name: 'Діагностика',
        useLink: '/services/5',
        image: 'src/assets/img/services/s5.svg',
    }
]
</script>

<template>
    <section class="bg-bg_gray pb-16 xl:pb-32">
        <div class="container mx-auto">
            <SectionHeader backText="послуги" title="Саме час обрати послугу" text="Для початку оберіть запит - це допоможе надати актуальну інформацію про послуги та їх ціни" />

            <div class="md:mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-14 xl:gap-y-24">
                <template v-for="(service, index) in services" :key="index">
                    <HomeOneService :name="service.name" :linkTo="service.useLink" :imgSrc="service.image" />
                </template>
            </div>
        </div>
    </section>
</template>
