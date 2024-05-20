<script setup>
import StarOutline from 'vue-material-design-icons/StarOutline.vue';
import Star from 'vue-material-design-icons/Star.vue';

const props = defineProps({
    rating: String,
})
</script>

<template>
    <div class="flex items-center gap-2 mb-7 justify-center sm:justify-start">
        <template v-for="index in Math.min(5, parseInt(rating))" key="index">
            <Star class="text-bg" />
        </template>
        <template v-for="index in Math.max(0, 5 - parseInt(rating))" key="index">
            <StarOutline class="text-[#CBCBCB]" />
        </template>
    </div>
</template>
