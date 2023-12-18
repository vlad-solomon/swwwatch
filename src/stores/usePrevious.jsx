import { create } from "zustand";

export const usePrevious = create((set) => ({
	previous: ["#fff", "#000", "#111", "#222"],
	addPrevious: (color) => set((state) => ({ previous: [color, ...state.previous.filter((prevColors) => prevColors !== color)] })),
	clearPrevious: () => set(() => ({ previous: [] })),
}));
