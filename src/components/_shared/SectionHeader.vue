<script setup>
import H2 from '@/components/_shared/H2.vue';

const props = defineProps({
    customClass: String,
    customStyles: String,
    backText: String,
    title: String,
    text: String,
})

const cls = 'relative py-10 md:py-16 xl:pt-36 xl:pb-28' + ' ' + (props.customClass ? props.customClass : '');
</script>

<template>
    <div :class="cls" :style="props.customStyles">
        <div class="absolute w-full text-center text-[#F3F3F3] xl:text-[280px] 2xl:text-[350px] leading-[0] font-bold font-['Roboto Condensed'] z-0 opacity-70 pointer-events-none">{{ props.backText }}</div>

        <H2 customClass="mb-2 text-center z-10 relative">{{ props.title }}</H2>

        <p class="text-center text-zinc-800 xl:text-2xl font-light z-10 relative">{{ props.text }}</p>
    </div>
</template>
