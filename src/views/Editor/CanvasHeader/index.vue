<template>
    <div class="canvas-header">
        <!-- Using content Prop and Named Slot for tooltip -->
        <div class="canvas-header__left">
            <el-tooltip placement="top" content="Undo">
                <IconBack />
            </el-tooltip>
            <el-tooltip placement="top">
                <template #content>redo</template>
                <IconNext />
            </el-tooltip>
            <el-tooltip placement="top" content="Ruler">
                <IconRuler />
            </el-tooltip>
        </div>
        <div class="canvas-header__right">
            <IconMinus />
            <el-popover
                ref="popover"
                placement="bottom"
                title="Title"
                :width="200"
                trigger="focus"
                content="this is content, this is content, this is content"
            >
                <template #reference>
                    <button class="m-2">Focus to activate</button>
                </template>
            </el-popover>
            <IconPlus />
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="css" scoped>
.canvas-header {
    display: flex;
    height: 40px;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
}

.canvas-header__left > * {
    padding-right: 20px;
}
</style>
