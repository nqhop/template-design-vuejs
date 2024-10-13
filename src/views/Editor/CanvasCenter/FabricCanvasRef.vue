<template>
    <div>
        <canvas ref="fabricCanvas" width="800" height="600"></canvas>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { fabric } from "fabric";

export default defineComponent({
    name: "FabricCanvas",
    setup() {
        const fabricCanvas = ref<HTMLCanvasElement | null>(null);
        let canvas: fabric.Canvas | null = null;

        onMounted(() => {
            if (fabricCanvas.value) {
                // Initialize Fabric.js canvas
                canvas = new fabric.Canvas(fabricCanvas.value);

                // Create a rectangle
                const rect = new fabric.Rect({
                    left: 100,
                    top: 100,
                    fill: "red",
                    width: 100,
                    height: 100,
                });

                // Create text
                const text = new fabric.Text("Hello, Fabric.js!", {
                    left: 150,
                    top: 50,
                    fontSize: 20,
                });

                // Add objects to the canvas
                canvas.add(rect);
                canvas.add(text);
            }
        });

        return {
            fabricCanvas,
        };
    },
});
</script>

<style scoped>
canvas {
    border: 1px solid #ccc;
}
</style>
