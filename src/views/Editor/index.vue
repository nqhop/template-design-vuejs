<template>
    <!-- <CanvasCenter/> -->
    <div class="layout-content">
        <CanvasLeft />
        <div class="layout-content-center">
            <CanvasHeader />
            <CanvasCenter />
        </div>
        <CanvasRight />
    </div>
</template>

<script setup lang="ts">
import CanvasCenter from "./CanvasCenter/index.vue";
import CanvasLeft from "./CanvasLeft/index.vue";
import CanvasHeader from "./CanvasHeader/index.vue";
import CanvasRight from "./CanvasRight/index.vue";
</script>

<style scoped>
.layout-content {
    display: flex;
    position: relative;
}

.layout-content-center {
    position: absolute;
    left: 210px;
}
</style>
