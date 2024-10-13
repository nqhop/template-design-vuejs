import { defineConfig } from "vite";
import { createVitePlugins } from "./build/plugin";
import { fileURLToPath } from "url";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: createVitePlugins(),
    resolve: {
        alias: {
            // '@': fileURLToPath(new URL('./src/', import.meta.url))
            "@": path.resolve(__dirname, "./src"),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "src/assets/style/variable.scss";`,
            },
        },
    },
});
