import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: HelloWorld },
        {
            path: "/editor",
            component: () => import("@/views/Editor/index.vue"),
            // component: () => import("../views/Editor/index.vue"),
        },
    ],
});

export default router;
