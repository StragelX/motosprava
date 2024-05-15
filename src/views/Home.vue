<script setup>
import HomeServices from '@/components/Home/HomeServices.vue';
import HomePopularServices from '@/components/Home/HomePopularServices.vue';
import CallBackForm from '@/components/_shared/CallBackForm.vue';
import HomeMap from '@/components/Home/HomeMap.vue';
import HomeHeroSlider from '@/components/Home/HomeHeroSlider.vue';
</script>

<template>
    <HomeHeroSlider />
    <HomeServices />
    <CallBackForm />
    <HomePopularServices />
    <HomeMap />
</template>
