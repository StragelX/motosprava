<script setup>
const props = defineProps({
    customClass: String,
    customStyles: String,
})

const cls = 'text-zinc-800 text-2xl xl:text-5xl font-bold font-["Roboto Condensed"]' + ' ' + (props.customClass ? props.customClass : '');
</script>

<template>
    <h2 :class="cls" :style="props.customStyles">
        <slot></slot>
    </h2>
</template>
