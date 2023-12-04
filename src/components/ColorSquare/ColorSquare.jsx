import useColorDrawer from "../../hooks/useColorDrawer";
import "./ColorSquare.scss";
import Tooltip from "../Tooltip/Tooltip";

function ColorSquare({ color }) {
	const setColorDrawer = useColorDrawer();

	return (
		<Tooltip content={color}>
			<div className="color-square" style={{ backgroundColor: color }} onClick={() => setColorDrawer(color)}></div>
		</Tooltip>
	);
}

export default ColorSquare;
