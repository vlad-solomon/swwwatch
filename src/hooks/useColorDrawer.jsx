import { useStore } from "../stores/useStore";
import { usePrevious } from "../stores/usePrevious";

export default function useColorDrawer() {
	const setSelectedColor = useStore((state) => state.setSelectedColor);
	const addPrevious = usePrevious((state) => state.addPrevious);
	const setSelectedDrawer = useStore((state) => state.setSelectedDrawer);

	return (color) => {
		setSelectedColor(color);
		addPrevious(color);
		setSelectedDrawer("color");
	};
}
