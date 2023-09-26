import "./Palette.scss";
import ColorShades from "../ColorShades/ColorShades";
import { useStore } from "../../stores/useStore";
import Logo from "../../assets/img/logo.svg";
import { forwardRef } from "react";

const Palette = forwardRef(({ palette }, ref) => {
	// const palette = useStore((state) => state.palette);
	// const palette = ["#111", "#222", "#333", "#444", "#555", "#666"];

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
