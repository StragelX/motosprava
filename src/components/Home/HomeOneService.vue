<script setup>
import Btn from '@/components/_shared/Btn.vue';

const props = defineProps({
    customClass: String,
    customStyles: String,
    imgSrc: String,
    linkTo: String,
    name: String,
})

const cls = '' + ' ' + (props.customClass ? props.customClass : '');
</script>

<template>
    <div :class="cls" :style="props.customStyles">
        <img :src="props.imgSrc" :alt="props.name" class="h-14 mx-auto" />

        <p class="text-center text-zinc-800 lg:text-2xl font-normal font-['Roboto Condensed'] my-4">{{ props.name }}</p>

        <Btn isLink customClass="max-w-[230px]" :linkTo="props.linkTo">Детальніше</Btn>
    </div>
</template>
