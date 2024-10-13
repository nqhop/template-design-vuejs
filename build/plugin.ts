import path from "path";
import { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

export const createVitePlugins = (): (PluginOption | PluginOption[])[] => {
    return [
        vue(),

        // https://github.com/vbenjs/vite-plugin-svg-icons?tab=readme-ov-file
        createSvgIconsPlugin({
            // specify the icon folder to be cached
            iconDirs: [path.resolve(process.cwd(), "src/icons")],
            // Specify symbolId format
            symbolId: "icon-[name]",

            /**
             * custom insert position
             * @default: body-last
             */
            inject: "body-last",

            /**
             * custom dom id
             * @default: __svg__icons__dom__
             */
            customDomId: "__svg__icons__dom__",
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ];
};
