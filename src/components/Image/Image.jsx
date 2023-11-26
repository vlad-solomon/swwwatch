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
import Logo from "../../assets/img/logo.svg";
import { motion, AnimatePresence } from "framer-motion";

function Image() {
	const uploadedImage = useStore((state) => state.uploadedImage);
	const setUploadedImage = useStore((state) => state.setUploadedImage);
	const setPalette = useStore((state) => state.setPalette);
	const clearUploadedImage = useStore((state) => state.clearUploadedImage);
	const containerRef = useRef();
	const setColorDrawer = useColorDrawer();

	const supportedTypes = ["image/png", "image/jpg", "image/jpeg", "image/gif"];

	function handleColorPick(color) {
		const { hex } = useColor(color);
		setColorDrawer(hex.value);
	}

	async function handleImageUpload(blob) {
		if (!blob || !supportedTypes.includes(blob.type)) return;

		const img = blob.kind === "file" ? URL.createObjectURL(blob.getAsFile()) : URL.createObjectURL(blob);
		const { height, width } = await useLoadImage(img);
		const palette = await prominent(img, { amount: 6, format: "hex" });

		setUploadedImage(img, height, width);
		setPalette(Array.isArray(palette) ? palette : [palette]);
	}

	async function handlePaste(event) {
		if (uploadedImage.img !== null) return;
		const items = [...event.clipboardData.items].filter((item) => item.type.indexOf("image") !== -1);
		handleImageUpload(items[0]);
	}

	const { getRootProps, getInputProps, isDragAccept } = useDropzone({
		accept: Object.fromEntries(supportedTypes.map((type) => [type, []])),
		onDropAccepted: async (acceptedFiles) => {
			handleImageUpload(acceptedFiles[0]);
		},
	});

	useEffect(() => {
		handleResize(uploadedImage.height, uploadedImage.width);

		const removedElements = document.querySelectorAll("div[data-testid='color-preview'], div[data-testid='zoom-preview-container']");
		removedElements.forEach((removedElement) => removedElement.remove());

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

	return (
		<AnimatePresence>
			{uploadedImage.img ? (
				<div className="image" ref={containerRef}>
					<div className="image__clear" onClick={clearUploadedImage}>
						&times;
					</div>
					<img src={uploadedImage.img} className="image__bg" />
					<ImageColorPicker onColorPick={handleColorPick} imgSrc={uploadedImage.img} />
				</div>
			) : (
				<motion.div className="image image--welcome" initial={false} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
					<div className="image__types">
						{supportedTypes.map((type) => (
							<div key={type} className="image__type">
								{type.split("/")[1]}
							</div>
						))}
					</div>
					<div {...getRootProps({ className: `image__dropzone ${isDragAccept ? "image__dropzone--is-drag" : ""}` })}>
						<input {...getInputProps()} />
						<img src={Welcome} alt="welcome" />
						<span>Paste or drag and drop your image here</span>
					</div>
					<div className="image__branding">
						<img src={Logo} />
						<span>
							created by{" "}
							<a href="https://github.com/vlad-solomon" target="_blank" referrerPolicy="no-referrer">
								Vlad Solomon
							</a>
						</span>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default Image;
