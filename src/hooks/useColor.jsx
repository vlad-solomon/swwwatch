import { colord, extend } from "colord";
import cmykPlugin from "colord/plugins/cmyk"

extend([cmykPlugin])

export default function useColor(color) {
    const rgb = color.match(/\d+/g).map(Number);
    const hex = colord(color).toHex();
    const hsl = Object.values(colord(color).toHsl()).slice(0, -1)
    const cmyk = Object.values(colord(color).toCmyk()).slice(0, -1)
    return { hex, rgb, hsl, cmyk }
}
