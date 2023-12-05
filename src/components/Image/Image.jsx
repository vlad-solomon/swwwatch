import "./Image.scss";
import { useEffect, useRef } from "react";
import { useStore } from "../../stores/useStore";
import ImageWelcome from "../ImageWelcome/ImageWelcome";
import ImageColorPick from "../ImageColorPick/ImageColorPick";
import { motion } from "framer-motion";

function Image() {
	const uploadedImage = useStore((state) => state.uploadedImage);
	const containerRef = useRef();

	function handleResize(height, width) {
		const canvas = containerRef.current.querySelector("canvas");
		if (!canvas) return;
		const hScale = containerRef.current.clientHeight / height;
		const wScale = containerRef.current.clientWidth / width;
		const scale = Math.min(wScale, hScale);

		canvas.style.transform = `scale(${scale})`;
	}

	useEffect(() => {
		handleResize(uploadedImage.height, uploadedImage.width);

		window.addEventListener("resize", () => {
			handleResize(uploadedImage.height, uploadedImage.width);
		});
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [uploadedImage.img]);

	return (
		<div className="image" ref={containerRef}>
			<motion.div className="image__inner" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={uploadedImage.img}>
				{!uploadedImage.img ? <ImageWelcome /> : <ImageColorPick />}
			</motion.div>
		</div>
	);
}

export default Image;
