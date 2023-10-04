import Tooltip from "../Tooltip/Tooltip";
import { useState } from "react";
import "./ColorShades.scss";
import { useStore } from "../../stores/useStore";
import useContrast from "../../hooks/useContrast";

export default function ColorShades({ shades, isMatching, isToggle, isColorCode, onClick }) {
	const selectedColor = useStore((state) => state.selectedColor);
	const [isGradient, setIsGradient] = useState(false);

	return (
		<div className="color-shades">
			{shades?.map((color, index) => (
				<Tooltip key={index} content={color}>
					<div className={`color-shades__shade ${color === selectedColor ? isMatching : ""}`} style={{ backgroundColor: color }} onClick={() => onClick(color)}>
						{isColorCode && <span style={{ color: useContrast(color) }}>{color}</span>}
					</div>
				</Tooltip>
			))}
			{isToggle && (
				<>
					<span className="color-shades__toggle" style={{ color: useContrast(selectedColor) }} onClick={() => setIsGradient((prev) => !prev)}>
						Toggle gradient
					</span>
					{isGradient && <div className="color-shades__gradient" style={{ background: `linear-gradient(90deg, ${shades.join(",")})` }}></div>}
				</>
			)}
		</div>
	);
}

//todo add the outline to the gradient also?
