import "./Palette.scss";
import ColorShades from "../ColorShades/ColorShades";
import { useStore } from "../../stores/useStore";

export default function Palette() {
	// const palette = useStore((state) => state.palette);
	const palette = ["#111", "#222", "#333", "#444", "#555"];

	return (
		<div className="palette">
			<ColorShades shades={palette} />
			<div className="palette__footer">
				<div className="palette__branding">
					<span>L O G O</span>
					<span>example.com</span>
				</div>
			</div>
		</div>
	);
}
