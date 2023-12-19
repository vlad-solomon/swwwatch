import "./PreviousColorsDrawer.scss";
import Drawer from "../Drawer/Drawer";
import ColorSquare from "../ColorSquare/ColorSquare";
import Previous from "../../assets/img/previous.svg";
import { usePrevious } from "../../stores/usePrevious";
import Button from "../Button/Button";
import { useStore } from "../../stores/useStore";

//todo add icons to clear buttons

export default function PreviousColorsDrawer() {
	const previous = usePrevious((state) => state.previous);
	const setSelectedModal = useStore((state) => state.setSelectedModal);

	return previous.length ? (
		<Drawer modifier="previous-colors">
			{previous.map((color) => (
				<ColorSquare key={`previous-${color}`} color={color} />
			))}
			<Button shape="square" text="R" intent="secondary" onClick={() => setSelectedModal("previous")} />
		</Drawer>
	) : (
		<Drawer>
			<img src={Previous} alt="previous" />
			<span>Any previously selected colors will be saved here</span>
		</Drawer>
	);
}
