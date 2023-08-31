import { create } from "zustand"
import test from "../img/test.png"
import cat from "../img/cat.jpg"

export const useStore = create((set) => ({
    uploadedImage: null,
    setUploadedImage: (url) => set({ uploadedImage: url }),
    selectedDrawer: "closed",
    setSelectedDrawer: (selectedDrawer) => set({ selectedDrawer: selectedDrawer }),
    selectedColor: null,
    setSelectedColor: (selectedColor) => set({ selectedColor })
}))