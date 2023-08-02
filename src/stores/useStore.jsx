import { create } from "zustand"

export const useStore = create((set) => ({
    drawer: "closed",
    setDrawer: (selectedDrawer) => set({ drawer: selectedDrawer })
}))