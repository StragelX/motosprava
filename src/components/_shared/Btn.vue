<script setup>
const props = defineProps({
    customClass: String,
    customStyles: String,
    isLink: Boolean,
    linkTo: String,
    active: Boolean,
})

const cls = 'flex mx-auto items-center justify-center h-14 rounded shadow border text-sm font-normal font-["Roboto Condensed"] uppercase transition-all w-full' + ' ' + (props.active ? 'bg-primary border-primary text-white hover:xl:border-white hover:xl:bg-white hover:xl:text-zinc-800' : 'bg-white text-zinc-800 hover:xl:bg-primary hover:xl:border-primary hover:xl:text-white') + ' ' + (props.customClass ? props.customClass : '');
</script>

<template>
    <button v-if="!props.isLink" :class="cls" :style="props.customStyles">
        <slot></slot>
    </button>

    <router-link v-else :to="props.linkTo" :class="cls" :style="props.customStyles">
        <slot></slot>
    </router-link>
</template>
