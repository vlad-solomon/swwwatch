import { forwardRef } from "react";
import useColorDrawer from "../../hooks/useColorDrawer";
import "./ColorSquare.scss";
import Tooltip from "../Tooltip/Tooltip";

const ColorSquare = forwardRef(({ color }, ref) => {
	const setColorDrawer = useColorDrawer();

	return (
		<Tooltip content={color} appendTo="parent">
			<div ref={ref} className="color-square" style={{ backgroundColor: color }} onClick={() => setColorDrawer(color)}></div>
		</Tooltip>
	);
});

export default ColorSquare;
