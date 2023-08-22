import { create } from "zustand"

export const usePrevious = create((set) => ({
    previous: [],
    addPrevious: (color) => set((state) => ({ previous: [...state.previous, color] }))
}))