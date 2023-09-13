import "./PaletteDrawer.scss";
import Drawer from "../Drawer/Drawer";
import { useStore } from "../../stores/useStore";
import { prominent } from "color.js";
import { useEffect, useState } from "react";
import ColorSquare from "../ColorSquare/ColorSquare";
import Tooltip from "../Tooltip/Tooltip";

export default function PaletteDrawer() {
	const uploadedImage = useStore((state) => state.uploadedImage);
	const [palette, setPalette] = useState([]);
	//todo set this state ^ in a store so it doesnt get recomputed every time the component rerenders

	useEffect(() => {
		uploadedImage.img && prominent(uploadedImage.img, { amount: 6, format: "hex" }).then((color) => setPalette(color));
		//todo i think this can be set the moment the image is uploaded seeing as it uses the same state at the same time
		//* that way the user has the palette ready exactly when the image loads
	}, [uploadedImage.img]);

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
