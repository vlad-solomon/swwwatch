import { create } from "zustand"

export const usePrevious = create((set) => ({
    previous: [],
    addPrevious: (color) => set((state) => ({ previous: [color, ...state.previous] }))
    // todo if the color already exists filter out all the old ones and then add the new one
}))