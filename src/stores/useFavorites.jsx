import { create } from "zustand";

export const useFavorite = create((set) => ({
	favorites: ["#fff", "#222"],
	setFavorites: (color) => set((state) => ({ favorites: state.favorites.includes(color) ? [...state.favorites].filter((favorites) => favorites !== color) : [color, ...state.favorites] })),
	clearFavorites: () => set(() => ({ favorites: [] })),
}));
