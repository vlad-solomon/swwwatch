import "./ImageWelcome.scss";
import { useEffect } from "react";
import Welcome from "../../assets/img/welcome.svg";
import Logo from "../../assets/img/logo.svg";
import { useDropzone } from "react-dropzone";
import { prominent } from "color.js";
import { useStore } from "../../stores/useStore";
import useLoadImage from "../../hooks/useLoadImage";

export default function ImageWelcome() {
	const uploadedImage = useStore((state) => state.uploadedImage);
	const setUploadedImage = useStore((state) => state.setUploadedImage);
	const setPalette = useStore((state) => state.setPalette);

	const supportedTypes = ["image/png", "image/jpg", "image/jpeg", "image/gif"];

	async function handleImageUpload(blob) {
		if (!blob || !supportedTypes.includes(blob.type)) return;

		const img = blob.kind === "file" ? URL.createObjectURL(blob.getAsFile()) : URL.createObjectURL(blob);
		const { height, width } = await useLoadImage(img);
		const palette = await prominent(img, { amount: 6, format: "hex" });

		setUploadedImage(img, height, width);
		setPalette(Array.isArray(palette) ? palette : [palette]);
	}

	const { getRootProps, getInputProps, isDragAccept } = useDropzone({
		accept: Object.fromEntries(supportedTypes.map((type) => [type, []])),
		onDropAccepted: async (acceptedFiles) => {
			handleImageUpload(acceptedFiles[0]);
		},
	});

	async function handlePaste(event) {
		if (uploadedImage.img !== null) return;
		const items = [...event.clipboardData.items].filter((item) => item.type.indexOf("image") !== -1);
		handleImageUpload(items[0]);
	}

	useEffect(() => {
		const removedElements = document.querySelectorAll("div[data-testid='color-preview'], div[data-testid='zoom-preview-container']");
		removedElements.forEach((removedElement) => removedElement.remove());

		document.addEventListener("paste", handlePaste);

		return () => {
			document.removeEventListener("paste", handlePaste);
		};
	}, [uploadedImage.img]);

	return (
		<>
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
					<a href="https://github.com/vlad-solomon" target="_blank" rel="noreferrer">
						Vlad Solomon
					</a>
				</span>
			</div>
		</>
	);
}
