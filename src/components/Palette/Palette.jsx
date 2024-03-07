import "./Palette.scss";
import ColorShades from "../ColorShades/ColorShades";

function Palette({ palette, paletteRef }) {
	return (
		<div className="palette" ref={paletteRef}>
			<ColorShades shades={palette} isColorCode={true} alignColorCode="top" />
			<div className="palette__branding">
				<span>{window.location.hostname + window.location.pathname.slice(0, -1)}</span>
			</div>
		</div>
	);
}

export default Palette;
