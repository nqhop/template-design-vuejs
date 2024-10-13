// https://github.com/vuejs/language-tools/blame/1b90234ec6f10a3c0f080d0310711c2cd8de02dd/extensions/vscode-vue-language-features/README.md#L95-L100
declare module "vue" {
    export interface GlobalComponents {
        ElTooltip: typeof import("element-plus/es")["ElTooltip"];
        ElRow: typeof import("element-plus/es")["ElRow"];
        ElPopover: typeof import("element-plus/es")["ElPopover"];
    }
}

export {};
