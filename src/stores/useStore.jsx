import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useStore = create(
	devtools((set) => ({
		uploadedImage: { img: null, height: null, width: null },
		setUploadedImage: (img, height, width) => set({ uploadedImage: { img, height, width } }),
		selectedDrawer: null,
		setSelectedDrawer: (selectedDrawer) => set({ selectedDrawer }),
		selectedColor: null,
		setSelectedColor: (selectedColor) => set({ selectedColor }),
		palette: [],
		setPalette: (palette) => set({ palette }),
	}))
);
