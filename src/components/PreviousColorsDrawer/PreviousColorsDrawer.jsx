import "./PreviousColorsDrawer.scss";
import Drawer from "../Drawer/Drawer";
import ColorSquare from "../ColorSquare/ColorSquare";
import Previous from "../../assets/img/previous.svg";
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
		<Drawer>
			<img src={Previous} alt="previous" />
			<span>Any previously selected colors will be saved here</span>
		</Drawer>
	);
}
