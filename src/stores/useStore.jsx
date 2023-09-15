import { create } from "zustand";
import test from "../img/test.png";
import cat from "../img/cat.jpg";

export const useStore = create((set) => ({
	uploadedImage: { img: null, height: null, width: null },
	setUploadedImage: (img, height, width) => set({ uploadedImage: { img, height, width } }),
	selectedDrawer: null,
	setSelectedDrawer: (selectedDrawer) => set({ selectedDrawer }),
	selectedColor: null,
	setSelectedColor: (selectedColor) => set({ selectedColor }),
	palette: [],
	setPalette: (palette) => set({ palette }),
}));
