import "./PreviousColorsDrawer.scss";
import Drawer from "../Drawer/Drawer";
import ColorSquare from "../ColorSquare/ColorSquare";
import Previous from "../../assets/img/previous.svg";
import { usePrevious } from "../../stores/usePrevious";
import Button from "../Button/Button";

export default function PreviousColorsDrawer() {
	const previous = usePrevious((state) => state.previous);
	const clearPrevious = usePrevious((state) => state.clearPrevious);

	return previous.length ? (
		<Drawer modifier="previous-colors">
			{previous.map((color) => (
				<ColorSquare key={`previous-${color}`} color={color} />
			))}
			<Button shape="square" text="R" onClick={clearPrevious} />
		</Drawer>
	) : (
		<Drawer>
			<img src={Previous} alt="previous" />
			<span>Any previously selected colors will be saved here</span>
		</Drawer>
	);
}
