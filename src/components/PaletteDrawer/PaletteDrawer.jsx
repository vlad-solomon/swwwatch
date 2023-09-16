import "./PaletteDrawer.scss";
import Drawer from "../Drawer/Drawer";
import { useStore } from "../../stores/useStore";
import { usePrevious } from "../../stores/usePrevious";
import ColorShades from "../ColorShades/ColorShades";
import Button from "../Button/Button";

export default function PaletteDrawer() {
	const uploadedImage = useStore((state) => state.uploadedImage);
	const setSelectedColor = useStore((state) => state.setSelectedColor);
	const setSelectedDrawer = useStore((state) => state.setSelectedDrawer);
	const addPrevious = usePrevious((state) => state.addPrevious);
	const palette = useStore((state) => state.palette);

	return uploadedImage.img ? (
		<Drawer modifier="palette">
			<ColorShades
				shades={palette}
				onClick={(color) => {
					// todo this function seems to repeat | develop hook
					setSelectedColor(color);
					setSelectedDrawer("color");
					addPrevious(color);
				}}
			/>
			<Button>Download palette</Button>
		</Drawer>
	) : (
		<Drawer>no image</Drawer>
	);
}
