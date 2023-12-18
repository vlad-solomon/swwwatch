import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useStore = create(
	devtools((set, get) => ({
		uploadedImage: { img: null, height: null, width: null },
		setUploadedImage: (img, height, width) => set({ uploadedImage: { img, height, width } }),
		selectedDrawer: null,
		setSelectedDrawer: (selectedDrawer) => set({ selectedDrawer }),
		selectedColor: null,
		setSelectedColor: (selectedColor) => set({ selectedColor }),
		palette: [],
		setPalette: (palette) => set({ palette }),
		clearUploadedImage: () => {
			get().setUploadedImage(null, null, null);
			get().setSelectedColor(null);
			get().setPalette([]);
		},
		selectedModal: null,
		setSelectedModal: (selectedModal) => set({ selectedModal }),
	}))
);
