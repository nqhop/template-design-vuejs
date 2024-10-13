import { fabric } from "fabric";
export class Textbox extends fabric.Textbox {
    constructor(text: string, options?: any) {
        super(text, options);
        console.log("Textbox constructor: " + text);
        console.table(options);
    }
}
