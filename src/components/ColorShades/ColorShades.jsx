import Tooltip from "../Tooltip/Tooltip";
import { useState } from "react";
import "./ColorShades.scss";
import { useStore } from "../../stores/useStore";

export default function ColorShades({ shades, isMatching, isToggle, onClick }) {
	const selectedColor = useStore((state) => state.selectedColor);
	const [isGradient, setIsGradient] = useState(false);

	return (
		<div className="color-shades">
			{shades?.map((color, index) => (
				<Tooltip key={index} content={color}>
					<div className={`color-shades__shade ${color === selectedColor ? isMatching : ""}`} style={{ backgroundColor: color }} onClick={() => onClick(color)}></div>
				</Tooltip>
			))}
			{isToggle && (
				<>
					<span className="color-shades__toggle" onClick={() => setIsGradient((prev) => !prev)}>
						Toggle gradient
					</span>
					{isGradient && <div className="color-shades__gradient" style={{ background: `linear-gradient(90deg, ${shades.join(",")})` }}></div>}
				</>
			)}
		</div>
	);
}
