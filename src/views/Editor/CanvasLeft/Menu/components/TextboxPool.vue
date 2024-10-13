<template>
    <p>TextBox Pool</p>
    <el-row @click="drawText">
        <p>add text</p>
    </el-row>
</template>

<script setup lang="ts">
import useHandleCreate from "@/hooks/useHandleCreate";
const { createTextElement } = useHandleCreate();
const drawText = () => {
    createTextElement();
};
</script>
