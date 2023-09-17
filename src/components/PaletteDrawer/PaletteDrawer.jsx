import "./PaletteDrawer.scss";
import Drawer from "../Drawer/Drawer";
import { useStore } from "../../stores/useStore";
import ColorShades from "../ColorShades/ColorShades";
import Button from "../Button/Button";
import useColorDrawer from "../../hooks/useColorDrawer";

export default function PaletteDrawer() {
	const uploadedImage = useStore((state) => state.uploadedImage);
	const palette = useStore((state) => state.palette);
	const setColorDrawer = useColorDrawer();

	// todo include the Tooltip component inside the components it's wrapping

	return uploadedImage.img ? (
		<Drawer modifier="palette">
			<ColorShades
				shades={palette}
				onClick={(color) => {
					setColorDrawer(color);
				}}
			/>
			<Button icon="/download.svg">Download palette</Button>
		</Drawer>
	) : (
		<Drawer>no image</Drawer>
	);
}
