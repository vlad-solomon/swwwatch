import "./Palette.scss";
import { forwardRef } from "react";
import ColorShades from "../ColorShades/ColorShades";
import Logo from "../../assets/img/logo.svg";

const Palette = forwardRef(({ palette }, ref) => {
	return (
		<div className="palette" ref={ref}>
			<ColorShades shades={palette} isColorCode={true} />
			<div className="palette__footer">
				<div className="palette__branding">
					<img src={Logo} alt="logo" />
					<span>example.com</span>
				</div>
			</div>
		</div>
	);
});

export default Palette;
