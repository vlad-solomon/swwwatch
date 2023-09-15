import "./PaletteDrawer.scss";
import Drawer from "../Drawer/Drawer";
import { useStore } from "../../stores/useStore";
import ColorSquare from "../ColorSquare/ColorSquare";
import Tooltip from "../Tooltip/Tooltip";

export default function PaletteDrawer() {
	const uploadedImage = useStore((state) => state.uploadedImage);
	const palette = useStore((state) => state.palette);

	return uploadedImage.img ? (
		<Drawer>
			{palette.map((color) => (
				<Tooltip key={`palette-${color}`} content={color}>
					<ColorSquare color={color} />
				</Tooltip>
			))}
		</Drawer>
	) : (
		<Drawer>no image</Drawer>
	);
}
