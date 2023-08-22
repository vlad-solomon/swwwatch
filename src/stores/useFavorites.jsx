import { create } from "zustand"

export const useFavorite = create((set) => ({
    favorites: [],
    setFavorites: (color) => set((state) => ({ favorites: state.favorites.includes(color) ? [...state.favorites].filter((favorites) => favorites !== color) : [...state.favorites, color] }))
}))