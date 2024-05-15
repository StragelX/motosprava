<script setup>
import CheckboxBlankOutline from 'vue-material-design-icons/CheckboxBlankOutline.vue';
import CheckboxMarked from 'vue-material-design-icons/CheckboxMarked.vue';
const props = defineProps({
    checked: Boolean,
    title: String,
})
</script>

<template>
    <label class="flex items-center gap-2">
        <input :checked="checked" type="checkbox" class="hidden peer" />
        <CheckboxBlankOutline class="flex-none peer-checked:hidden" />
        <CheckboxMarked class="flex-none hidden peer-checked:block" />
        <p>{{ title }}</p>
    </label>
</template>
