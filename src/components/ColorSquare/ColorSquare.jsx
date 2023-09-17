import { forwardRef } from "react";
import useColorDrawer from "../../hooks/useColorDrawer";
import "./ColorSquare.scss";

const ColorSquare = forwardRef(({ color }, ref) => {
	const setColorDrawer = useColorDrawer();

	return (
		<div
			ref={ref}
			className="color-square"
			style={{ backgroundColor: color }}
			onClick={() => {
				setColorDrawer(color);
			}}
		></div>
	);
});

export default ColorSquare;
