import useColor from "./useColor";

const BLACK = "rgba(0,0,0,0.8)";
const WHITE = "rgba(255,255,255,0.8)";

export default function useContrast(color) {
	const { rgb } = useColor(color);
	const [r, g, b] = rgb.value;
	const contrast = (r * 299 + g * 587 + b * 114) / 1000;
	return contrast >= 128 ? BLACK : WHITE;
}
