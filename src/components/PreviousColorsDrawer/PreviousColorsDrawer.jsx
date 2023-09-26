import "./PreviousColorsDrawer.scss";
import Drawer from "../Drawer/Drawer";
import ColorSquare from "../ColorSquare/ColorSquare";

import { usePrevious } from "../../stores/usePrevious";

export default function PreviousColorsDrawer() {
	const previous = usePrevious((state) => state.previous);

	return previous.length ? (
		<Drawer modifier="previous-colors">
			{previous.map((color) => (
				<ColorSquare key={`previous-${color}`} color={color} />
			))}
		</Drawer>
	) : (
		<Drawer>no previous colors</Drawer>
	);
}
