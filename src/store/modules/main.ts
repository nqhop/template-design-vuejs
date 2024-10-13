import { defineStore } from "pinia";
import { PoolType } from "@/types/common";

export interface MainState {
    poolType: PoolType;
    poolShow: Boolean;
}

export const useMainStore = defineStore("main", {
    state: (): MainState => ({
        poolType: "editor",
        poolShow: false,
    }),
    actions: {
        setPoolType(poolType: PoolType) {
            this.poolType = poolType;
        },
        setpoolShow(poolType: PoolType) {
            this.poolShow = poolType == this.poolType ? !this.poolShow : true;
        },
    },
});
