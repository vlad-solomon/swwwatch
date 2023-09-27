import "./PaletteDrawer.scss";
import Drawer from "../Drawer/Drawer";
import { useStore } from "../../stores/useStore";
import { useRef } from "react";
import ColorShades from "../ColorShades/ColorShades";
import Button from "../Button/Button";
import useColorDrawer from "../../hooks/useColorDrawer";
import Palette from "../Palette/Palette";
import Download from "../../assets/img/download.svg";
import html2canvas from "html2canvas";
import { format } from "date-fns";

export default function PaletteDrawer() {
	const uploadedImage = useStore((state) => state.uploadedImage);
	const palette = useStore((state) => state.palette);
	const setColorDrawer = useColorDrawer();
	const paletteRef = useRef();

	function handleDownload() {
		html2canvas(paletteRef.current, { backgroundColor: null, scale: 5 }).then((canvas) => {
			canvas.setAttribute("id", "palette-canvas");
			document.body.appendChild(canvas);
			const palette = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
			const link = document.createElement("a");
			if (typeof link.download === "string") {
				link.href = palette;
				link.download = `${format(new Date(), "yyyy.MM.dd - HH.mm.ss")}.png`;
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
			document.getElementById("palette-canvas").remove();
		});
	}

	return uploadedImage.img ? (
		<Drawer modifier="palette">
			<ColorShades shades={palette} onClick={(color) => setColorDrawer(color)} />
			<Button text="Download" icon={Download} onClick={handleDownload} />
			<Palette palette={palette} ref={paletteRef} />
		</Drawer>
	) : (
		<Drawer>no image</Drawer>
	);
}
