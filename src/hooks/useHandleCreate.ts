import { Textbox } from "@/extension/object/Textbox";
import { nanoid } from "nanoid";
import { Object as FabricObject } from "fabric/fabric-impl";
import useCanvas from "@/views/Canvas/useCanvas";
export default () => {
    function renderCanvas(element: FabricObject) {
        // throw new Error("Function not implemented.");
        const [canvas] = useCanvas();
        canvas.viewportCenterObject(element);
        canvas.add(element);
        canvas.setActiveObject(element);
        canvas.renderAll();
    }
    const createTextElement = () => {
        const textValue = "default text value";
        const textBoxElement = new Textbox("default text value", {
            id: nanoid(10),
            left: 0,
            top: 0,
            fontSize: 36,
            fontFamily: "fontFamily",
            fillType: 0,
            hasControls: true,
            hasBorders: true,
            fontWeight: "normal",
            charSpacing: 3,
            opacity: 1,
            lineHeight: 1.3,
            originX: "left",
            originY: "top",
            textAlign: "justify-center",
            name: "textbox",
            splitByGrapheme: false,
            width: (36 * textValue.length) / 2,
        });
        renderCanvas(textBoxElement);
    };
    return {
        createTextElement,
    };
};
