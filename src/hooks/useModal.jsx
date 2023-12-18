import { useFavorite } from "../stores/useFavorites";
import { usePrevious } from "../stores/usePrevious";
import { useStore } from "../stores/useStore";

export default function useModal() {
	const selectedModal = useStore((state) => state.selectedModal);
	const clearFavorites = useFavorite((state) => state.clearFavorites);
	const clearPrevious = usePrevious((state) => state.clearPrevious);

	const modals = {
		favorites: {
			head: "Remove all favorite colors",
			content: "You are about to clear all your favorite colors. This action is permanent and cannot be undone. Are you sure?",
			controls: [
				{ text: "Remove", onClick: clearFavorites },
				{ text: "Cancel", intent: "secondary" },
			],
		},
		previous: {
			head: "Remove all previous colors",
			content: "You are about to clear all your previously selected colors. This action is permanent and cannot be undone. Are you sure?",
			controls: [
				{ text: "Remove", onClick: clearPrevious },
				{ text: "Cancel", intent: "secondary" },
			],
		},
	};
	return modals[selectedModal];
}
