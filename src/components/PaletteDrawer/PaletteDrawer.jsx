import "./PaletteDrawer.scss";
import Drawer from "../Drawer/Drawer";
import { useStore } from "../../stores/useStore";
import ColorShades from "../ColorShades/ColorShades";
import Button from "../Button/Button";
import useColorDrawer from "../../hooks/useColorDrawer";
// import Download from "../../assets/img/download.svg"

export default function PaletteDrawer() {
	const uploadedImage = useStore((state) => state.uploadedImage);
	const palette = useStore((state) => state.palette);
	const setColorDrawer = useColorDrawer();

	return uploadedImage.img ? (
		<Drawer modifier="palette">
			<ColorShades
				shades={palette}
				onClick={(color) => {
					setColorDrawer(color);
				}}
			/>
			<Button text="Download" icon="/download.svg" />
		</Drawer>
	) : (
		<Drawer>no image</Drawer>
	);
}

//todo download palette component
