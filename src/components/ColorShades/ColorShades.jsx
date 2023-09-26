import Tooltip from "../Tooltip/Tooltip";
import { useState } from "react";
import "./ColorShades.scss";
import { useStore } from "../../stores/useStore";

export default function ColorShades({ shades, isMatching, isToggle, isColorCode, onClick }) {
	const selectedColor = useStore((state) => state.selectedColor);
	const [isGradient, setIsGradient] = useState(false);

	return (
		<div className="color-shades">
			{shades?.map((color, index) => (
				<Tooltip key={index} content={color}>
					<div className={`color-shades__shade ${color === selectedColor ? isMatching : ""}`} style={{ backgroundColor: color }} onClick={() => onClick(color)}>
						{isColorCode && <span>{color}</span>}
						{/* //todo this text will need to be either white or black depending on the color it's overlapping */}
					</div>
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

// todo make "toggle gradient" text be visible regardless of back color
