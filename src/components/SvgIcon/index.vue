<template>
    <svg aria-hidden="true" class="svg-icon">
        <use :href="symbolId" />
    </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    prefix: {
        type: String,
        default: "icon",
    },
});
const symbolId = computed(() => {
    return `#${props.prefix}-${props.name}`;
});
</script>

<style scoped>
.svg-icon {
    width: 20px;
    height: 20px;
    /* color: #35393d; */
}
</style>
