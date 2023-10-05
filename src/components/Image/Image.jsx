import "./Image.scss";
import { useEffect, useRef } from "react";
import { useStore } from "../../stores/useStore";
import { ImageColorPicker } from "react-image-color-picker";
import Welcome from "./welcome.svg";
import useColor from "../../hooks/useColor";
import { prominent } from "color.js";
import useColorDrawer from "../../hooks/useColorDrawer";
import { useDropzone } from "react-dropzone";
import useLoadImage from "../../hooks/useLoadImage";

function Image() {
	const uploadedImage = useStore((state) => state.uploadedImage);
	const setUploadedImage = useStore((state) => state.setUploadedImage);
	const setPalette = useStore((state) => state.setPalette);
	const containerRef = useRef();
	const setColorDrawer = useColorDrawer();

	const supportedTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif"];

	function handleColorPick(color) {
		const { hex } = useColor(color);
		setColorDrawer(hex.value);
	}

	async function handleImageUpload(blob) {
		if (!supportedTypes.includes(blob.type)) return;

		const img = blob.kind === "file" ? URL.createObjectURL(blob.getAsFile()) : URL.createObjectURL(blob);
		const { height, width } = await useLoadImage(img);
		const palette = await prominent(img, { amount: 6, format: "hex" });

		setUploadedImage(img, height, width);
		setPalette(palette.length === 1 ? [palette] : palette);
	}

	async function handlePaste(event) {
		const items = [].slice.call(event.clipboardData.items).filter((item) => item.type.indexOf("image") !== -1);
		handleImageUpload(items[0]);
	}

	const { getRootProps, getInputProps, isDragAccept } = useDropzone({
		accept: Object.fromEntries(supportedTypes.map((type) => [type, []])),
		onDropAccepted: async (acceptedFiles) => {
			handleImageUpload(acceptedFiles[0]);
		},
	});

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

	function handleResize(height, width) {
		if (!containerRef.current) return;

		const canvas = containerRef.current.querySelector("canvas");
		const hScale = containerRef.current.clientHeight / height;
		const wScale = containerRef.current.clientWidth / width;
		const scale = Math.min(wScale, hScale);

		canvas.style.transform = `scale(${scale})`;
	}

	return uploadedImage.img ? (
		<div className="image" ref={containerRef}>
			<img src={uploadedImage.img} className="image__bg" />
			<ImageColorPicker onColorPick={handleColorPick} imgSrc={uploadedImage.img} />
		</div>
	) : (
		<div className="image image--welcome">
			{/* //todo add badges with the accepted types of images */}
			<div {...getRootProps({ className: "image__dropzone", style: { ...(isDragAccept ? { backgroundColor: "rgba(255,255,255,0.05" } : {}) } })}>
				<input {...getInputProps()} />
				<img src={Welcome} alt="welcome" />
				<span>Paste or drag and drop your image here</span>
			</div>
		</div>
	);
}

export default Image;

//todo get rid of the paste functionality? | if there's already an image prevent paste
