// import { Canvas } from "../../node_modules/@types/fabric/fabric-impl";
// ./node_modules/@types/fabric/fabric-impl

// import { Canvas } from "E:/vue/template-design/node_modules/fabric/dist/fabric.js";
import { fabric } from "fabric";

export class FabricCanvas extends fabric.Canvas {
    constructor(el: null | HTMLCanvasElement, options?: any) {
        super(el, options);
    }
}

// export class FabricCanvas {
//     constructor(el: string | HTMLCanvasElement, options?: any) {}
// }
