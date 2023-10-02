import "./Image.scss";
import { useEffect, useRef } from "react";
import { useStore } from "../../stores/useStore";
import { ImageColorPicker } from "react-image-color-picker";
import Welcome from "./welcome.svg";
import useColor from "../../hooks/useColor";
import { prominent } from "color.js";
import useColorDrawer from "../../hooks/useColorDrawer";

function Image() {
	const uploadedImage = useStore((state) => state.uploadedImage);
	const setUploadedImage = useStore((state) => state.setUploadedImage);
	const setPalette = useStore((state) => state.setPalette);
	const containerRef = useRef();
	const setColorDrawer = useColorDrawer();

	function handleColorPick(color) {
		const { hex } = useColor(color);
		setColorDrawer(hex.value);
	}

	async function loadImage(src) {
		return new Promise((resolve, reject) => {
			const img = document.createElement("img");
			img.src = src;
			img.onload = () => resolve({ height: img.height, width: img.width });
			img.onerror = reject;
		});
	}

	function handleResize(height, width) {
		if (!containerRef.current) return;

		const canvas = containerRef.current.querySelector("canvas");
		const hScale = containerRef.current.clientHeight / height;
		const wScale = containerRef.current.clientWidth / width;
		const scale = Math.min(wScale, hScale);

		canvas.style.transform = `scale(${scale})`;
	}

	async function handlePaste(event) {
		const items = [].slice.call(event.clipboardData.items).filter((item) => item.type.indexOf("image") !== -1);

		if (items.length === 0) return;
		const data = URL.createObjectURL(items[0].getAsFile());
		const { height, width } = await loadImage(data);
		const palette = await prominent(data, { amount: 6, format: "hex" });

		setUploadedImage(data, height, width);
		setPalette(palette.length === 1 ? [palette] : palette);
	}

	useEffect(() => {
		const removedElements = document.querySelectorAll("div[data-testid='color-preview'], div[data-testid='zoom-preview-container']");
		removedElements.forEach((removedElement) => removedElement.remove());
		// todo research if i can use color-preview the way i designed it in the figma file
		handleResize(uploadedImage.height, uploadedImage.width);

		document.addEventListener("paste", handlePaste);
		window.addEventListener("resize", () => {
			handleResize(uploadedImage.height, uploadedImage.width);
		});
		return () => {
			document.removeEventListener("paste", handlePaste);
			window.removeEventListener("resize", handleResize);
		};
	}, [uploadedImage.img]);

	return uploadedImage.img ? (
		<div className="image" ref={containerRef}>
			<img src={uploadedImage.img} className="image__bg" />
			<ImageColorPicker onColorPick={handleColorPick} imgSrc={uploadedImage.img} />
		</div>
	) : (
		<div className="image image--welcome">
			<img src={Welcome} alt="welcome" />
			<span>Paste or drag and drop your image here</span>
		</div>
	);
}

export default Image;
