import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const usePrevious = create(
	persist(
		(set) => ({
			previous: [],
			addPrevious: (color) => set((state) => ({ previous: [color, ...state.previous.filter((prevColors) => prevColors !== color)] })),
			clearPrevious: () => set(() => ({ previous: [] })),
		}),
		{
			name: "previous-colors",
			storage: createJSONStorage(() => localStorage),
		}
	)
);
