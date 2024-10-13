import { FabricCanvas } from "@/app/fabricCanvas";
import { useFabricStore } from "@/store/modules/fabricCustom";
import { storeToRefs } from "pinia";
import { fabric } from "fabric";

let canvas: null | FabricCanvas = null;

const initCanvas = () => {
    const fabricStore = useFabricStore();
    const { canvasRef } = storeToRefs(fabricStore);
    const fabricWidth = fabricStore.getWidth();
    const fabricHeight = fabricStore.getHeight();
    canvas = new FabricCanvas(canvasRef.value, {
        width: fabricWidth,
        height: fabricHeight,
    });
    const text = new fabric.Text("Hello, Fabric.js!!!!!", {
        left: 150,
        top: 50,
        fontSize: 20,
    });
    canvas.add(text);
    canvas.preserveObjectStacking = true;
    canvas.renderAll();
};

export const initEditor = () => {
    initCanvas();
};
export default (): [FabricCanvas] => [canvas as FabricCanvas];
