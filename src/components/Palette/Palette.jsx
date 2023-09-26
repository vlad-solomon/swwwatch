import "./Palette.scss";
import ColorShades from "../ColorShades/ColorShades";
import { useStore } from "../../stores/useStore";
import Logo from "../../assets/img/logo.svg";

export default function Palette() {
	// const palette = useStore((state) => state.palette);
	const palette = ["#111", "#222", "#333", "#444", "#555", "#666"];

	return (
		<div className="palette">
			<ColorShades shades={palette} isColorCode={true} />
			<div className="palette__footer">
				<div className="palette__branding">
					<img src={Logo} alt="logo" />
					<span>example.com</span>
				</div>
			</div>
		</div>
	);
}
