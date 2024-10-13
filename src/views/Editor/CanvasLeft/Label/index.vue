<template>
    <div class="left-tabs">
        <el-tooltip placement="top-start" content="Home page">
            <div class="left-tabs__top">
                <IconHome size="20" />
            </div>
        </el-tooltip>
        <ul>
            <li
                v-for="tab in topTabs"
                :key="tab.index"
                @click="setPoolType(tab.key)"
            >
                <div
                    class="left-tabs__svg"
                    :class="{ 'left-tabs__svg--active': tab.key == poolType }"
                >
                    <SvgIcon :name="tab.icon"></SvgIcon>
                    <p>{{ tab.label }}</p>
                </div>
            </li>
        </ul>
        <div class="left-tabs__bottom">
            <SvgIcon name="help"></SvgIcon>
            <p>Help</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PoolType } from "@/types/common";
import SvgIcon from "@/components/SvgIcon/index.vue";
import { useMainStore } from "@/store";
import { storeToRefs } from "pinia";

interface TabItem {
    key: PoolType;
    label: string;
    icon: string;
    index: number;
}

const mainStore = useMainStore();
const { poolType, poolShow } = storeToRefs(mainStore);

const topTabs: TabItem[] = [
    { key: "editor", label: "edit", icon: `editor`, index: 0 },
    { key: "template", label: "template", icon: `template`, index: 1 },
    { key: "material", label: "material", icon: `material`, index: 2 },
    { key: "text", label: "text", icon: "text", index: 3 },
    { key: "image", label: "image", icon: "picture", index: 4 },
    { key: "toolkit", label: "tool", icon: "toolkit", index: 5 },
    { key: "chatgpt", label: "chatgpt", icon: "chatgpt", index: 6 },
];

const setPoolType = (tab: PoolType) => {
    mainStore.setpoolShow(tab);
    mainStore.setPoolType(tab);
};
</script>

<style scoped lang="scss">
.left-tabs {
    width: 60px;
    position: relative;
    z-index: 10;
    height: 100vh;
    background-color: #fff;
}

.left-tabs__top {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid $borderColor;
    cursor: pointer;
}

.left-tabs__svg {
    cursor: pointer;
    font-size: 0.9em;
    height: 60px;
    display: flex;
    color: #35393d;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.left-tabs__bottom {
    cursor: pointer;
    position: absolute;
    bottom: 12px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.left-tabs__svg--active {
    color: $themeColor;
}

.left-tabs__svg--active::before {
    position: absolute;
    border-radius: 4px;
    content: "";
    left: -2px;
    width: 6px;
    height: 40px;
    background: $themeColor;
    display: inline-block;
}
</style>
