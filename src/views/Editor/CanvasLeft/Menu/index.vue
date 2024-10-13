<template>
    <div class="menu-content" :class="{ 'menu-close': poolShow != true }">
        <component :is="currentComponent" />
        <div class="layout-toggle" @click="handleToggle">
            <IconLeft class="toggle-icon" v-if="poolShow" />
            <IconRight class="toggle-icon" v-else />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import EditorPool from "./components/EditorPool.vue";
import TemplatePool from "./components/TemplatePool.vue";
import ChatgptPool from "./components/ChatgptPool.vue";
import ImagePool from "./components/ImagePool.vue";
import MateriaPool from "./components/MateriaPool.vue";
import TextboxPool from "./components/TextboxPool.vue";
import ToolkitPool from "./components/ToolkitPool.vue";
import { useMainStore } from "@/store/index";
import { storeToRefs } from "pinia";

const mainStore = useMainStore();
const { poolType, poolShow } = storeToRefs(mainStore);

const leftMap = {
    editor: EditorPool,
    template: TemplatePool,
    material: MateriaPool,
    text: TextboxPool,
    image: ImagePool,
    illustration: EditorPool,
    code: EditorPool,
    toolkit: ToolkitPool,
    layer: EditorPool,
    chatgpt: ChatgptPool,
    help: null,
};

const currentComponent = computed(() => {
    return leftMap[poolType.value];
});

const handleToggle = () => {
    poolShow.value = !poolShow.value;
};
</script>

<style lang="css" scoped>
.menu-content {
    position: absolute;
    z-index: 1;
    width: 300px;
    top: 0;
    bottom: 0;
    left: 60px;
    background: #ccc;
    transition: left 0.5s linear, right 0.5s linear;
}
.menu-close {
    left: -240px;
}

.layout-toggle {
    background: #409eff;
    height: 88px;
    width: 16px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -16px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    display: flex;
    align-items: center;
    text-align: center;
}

.toggle-icon {
    color: #fff;
}
</style>
