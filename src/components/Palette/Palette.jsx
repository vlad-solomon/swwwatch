import "./Palette.scss";
import ColorShades from "../ColorShades/ColorShades";
import Logo from "../../assets/img/logo.svg";

function Palette({ palette, paletteRef }) {
	return (
		<div className="palette" ref={paletteRef}>
			<ColorShades shades={palette} isColorCode={true} />
			<div className="palette__footer">
				<div className="palette__branding">
					<img src={Logo} alt="logo" />
					<span>vlad-solomon.github.io/swwwatch</span>
				</div>
			</div>
		</div>
	);
}

export default Palette;

//todo style the palette drawer to look better
//todo add animations
//todo add pattern background?
