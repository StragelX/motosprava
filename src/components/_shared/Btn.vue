<script setup>
const props = defineProps({
    customClass: String,
    customStyles: String,
    isLink: Boolean,
    linkTo: String,
    active: Boolean,
})

const cls = 'flex mx-auto items-center justify-center h-14 rounded shadow border text-sm font-normal font-["Roboto Condensed"] uppercase transition-all w-full' + ' ' + (props.active ? 'bg-[#4D7DF9] border-[#4D7DF9] text-white hover:lg:border-white hover:lg:bg-white hover:lg:text-zinc-800' : 'bg-white text-zinc-800 hover:lg:bg-[#4D7DF9] hover:lg:border-[#4D7DF9] hover:lg:text-white') + ' ' + (props.customClass ? props.customClass : '');
</script>

<template>
    <button v-if="!props.isLink" :class="cls" :style="props.customStyles">
        <slot></slot>
    </button>

    <router-link v-else :to="props.linkTo" :class="cls" :style="props.customStyles">
        <slot></slot>
    </router-link>
</template>
