<template>
    <div>
        <canvas ref="canvas" width="800" height="600" id="c"></canvas>
    </div>
</template>

<script lang="js">
import { defineComponent, onMounted, ref } from 'vue';
import { fabric } from 'fabric';

export default defineComponent({
  name: 'FabricCanvas',
  setup() {
    let canvas;

    onMounted(() => {
        canvas = new fabric.Canvas('c');

        // Create a rectangle
        const rect = new fabric.Rect({
          left: 100,
          top: 100,
          fill: 'red',
          width: 100,
          height: 100,
        });

        // Create text
        const text = new fabric.Text('Hello, Fabric.js!', {
          left: 150,
          top: 50,
          fontSize: 20,
        });

        // Add objects to the canvas
        canvas.add(rect);
        canvas.add(text);
    //   }
    });
  },
});
</script>

<style scoped>
canvas {
    border: 1px solid #ccc;
}
</style>
