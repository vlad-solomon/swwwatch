import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useFavorite = create(
	persist(
		(set) => ({
			favorites: [],
			setFavorites: (color) => set((state) => ({ favorites: state.favorites.includes(color) ? [...state.favorites].filter((favorites) => favorites !== color) : [color, ...state.favorites] })),
			clearFavorites: () => set(() => ({ favorites: [] })),
		}),
		{
			name: "favorite-colors",
			storage: createJSONStorage(() => localStorage),
		}
	)
);
