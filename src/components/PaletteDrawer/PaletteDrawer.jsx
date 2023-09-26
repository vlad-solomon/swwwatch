import "./PaletteDrawer.scss";
import Drawer from "../Drawer/Drawer";
import { useStore } from "../../stores/useStore";
import { useState, useRef } from "react";
import ColorShades from "../ColorShades/ColorShades";
import Button from "../Button/Button";
import useColorDrawer from "../../hooks/useColorDrawer";
import Palette from "../Palette/Palette";
import Download from "../../assets/img/download.svg";
import html2canvas from "html2canvas";
import { useEffect } from "react";

export default function PaletteDrawer() {
	const uploadedImage = useStore((state) => state.uploadedImage);
	const palette = useStore((state) => state.palette);
	const setColorDrawer = useColorDrawer();
	const [isDownloading, setIsDownloading] = useState(false);
	const paletteRef = useRef();

	useEffect(() => {
		html2canvas(paletteRef.current, { scale: 5 }).then((canvas) => {
			document.body.appendChild(canvas);
			let palette = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
			let link = document.createElement("a");
			if (typeof link.download === "string") {
				link.href = palette;
				link.download = `testing.png`;
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
			document.querySelectorAll("canvas")[1].parentNode.removeChild(document.querySelectorAll("canvas")[1]);
			setIsDownloading(false);
		});
	}, [isDownloading]);

	return uploadedImage.img ? (
		<Drawer modifier="palette">
			<ColorShades
				shades={palette}
				onClick={(color) => {
					setColorDrawer(color);
				}}
			/>
			<Button text="Download" icon={Download} onClick={() => setIsDownloading(true)} />
			{isDownloading && <Palette palette={palette} ref={paletteRef} />}
		</Drawer>
	) : (
		<Drawer>no image</Drawer>
	);
}

//todo download palette component
