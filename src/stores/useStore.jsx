import { create } from "zustand"

export const useStore = create((set) => ({
    selectedDrawer: "closed",
    setSelectedDrawer: (selectedDrawer) => set({ selectedDrawer: selectedDrawer }),
    selectedColor: null,
    setSelectedColor: (selectedColor) => set({ selectedColor })
}))