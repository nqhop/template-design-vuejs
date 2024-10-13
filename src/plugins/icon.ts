// https://iconpark.oceanengine.com/official
import { Back, Home, Left, Minus, Next, Plus, Right, Ruler } from "@icon-park/vue-next";
import { App } from "vue";

export const icons = {
    IconLeft: Left,
    IconRight: Right,
    IconHome: Home,
    IconBack: Back,
    IconNext: Next,
    IconRuler: Ruler,
    IconMinus: Minus,
    IconPlus: Plus
};

// facilitate the use of icon components throughout a application 
export default {
    install(app: App) {
        for (const [key, component] of Object.entries(icons))
            app.component(key, component);
    },
};
