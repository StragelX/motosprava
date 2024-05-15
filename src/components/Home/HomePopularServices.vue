<script setup>
import SectionHeader from '@/components/_shared/SectionHeader.vue';
import HomePopularSlider from './HomePopularSlider/HomePopularSlider.vue';
</script>

<template>
    <section class="bg-[#F8F8F8]">
        <div class="container mx-auto">
            <SectionHeader backText="відгуки" title="Популярні послуги" text="Для початку оберіть запит - це допоможе надати актуальну інформацію про послуги та їх ціни" />

            <HomePopularSlider />
        </div>
    </section>
</template>
