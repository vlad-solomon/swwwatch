import "./ImageColorPick.scss";
import { useStore } from "../../stores/useStore";
import { ImageColorPicker } from "react-image-color-picker";
import useColorDrawer from "../../hooks/useColorDrawer";
import useColor from "../../hooks/useColor";
import Close from "../../assets/img/close.svg";

//todo ImageColorPick.scss is empty

export default function ImageColorPick() {
	const uploadedImage = useStore((state) => state.uploadedImage);
	const clearUploadedImage = useStore((state) => state.clearUploadedImage);
	const setColorDrawer = useColorDrawer();

	function handleColorPick(color) {
		const { hex } = useColor(color);
		setColorDrawer(hex.value);
	}

	return (
		<>
			<div className="image__clear" onClick={clearUploadedImage}>
				<img src={Close} alt="remove image" />
			</div>
			<img src={uploadedImage.img} className="image__bg" />
			<ImageColorPicker onColorPick={handleColorPick} imgSrc={uploadedImage.img} />
		</>
	);
}
