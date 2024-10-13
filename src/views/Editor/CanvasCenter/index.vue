<template>
    <div ref="wrapperRef">
        <canvas ref="canvasRef" class="canvas-background"></canvas>
    </div>
    <!-- <FabricCanvas />
    <FabricCanvasRef /> -->
</template>

<script setup lang="ts">
import { onMounted } from "vue";
// import FabricCanvas from "./FabricCanvas.vue";
// import FabricCanvasRef from "./FabricCanvasRef.vue";
import { initEditor } from "@/views/Canvas/useCanvas";
import { storeToRefs } from "pinia";
import { useFabricStore } from "@/store/modules/fabricCustom";

const fabricStore = useFabricStore();
const { wrapperRef, canvasRef } = storeToRefs(fabricStore);

onMounted(() => {
    initEditor();
});
</script>

<style lang="scss" scoped>
.canvas-background {
    --offsetX: 0px;
    --offsetY: 0px;
    --size: 8px;
    --color: #dedcdc;
    background-image: linear-gradient(
            45deg,
            var(--color) 25%,
            transparent 0,
            transparent 75%,
            var(--color) 0
        ),
        linear-gradient(
            45deg,
            var(--color) 25%,
            transparent 0,
            transparent 75%,
            var(--color) 0
        );
    background-position: var(--offsetX) var(--offsetY),
        calc(var(--size) + var(--offsetX)) calc(var(--size) + var(--offsetY));
    background-size: calc(var(--size) * 2) calc(var(--size) * 2);
}
</style>
