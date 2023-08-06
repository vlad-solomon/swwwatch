import { colord, extend } from "colord";
import cmykPlugin from "colord/plugins/cmyk"
import mixPlugin from "colord/plugins/mix"

extend([cmykPlugin, mixPlugin])

export default function useColor(color) {
    if (!color) return {}

    const offsets = [-0.2, -0.1, 0, 0.1, 0.2]

    const rgb = color.match(/\d+/g).map(Number);
    const hex = colord(color).toHex();
    const hsl = Object.values(colord(color).toHsl()).slice(0, -1)
    const cmyk = Object.values(colord(color).toCmyk()).slice(0, -1)
    const tints = offsets.map((offset) => colord(color).lighten(offset).toHex())

    return { hex, rgb, hsl, cmyk, tints }
}
