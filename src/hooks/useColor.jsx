import { colord, extend } from "colord";
import cmykPlugin from "colord/plugins/cmyk"
import mixPlugin from "colord/plugins/mix"

extend([cmykPlugin, mixPlugin])

export default function useColor(color) {
    if (!color) return {}

    const offsets = [-0.2, -0.1, 0, 0.1, 0.2]

    const hex = colord(color).toHex();
    const rgb = Object.values(colord(color).toRgb()).slice(0, -1)
    const hsl = Object.values(colord(color).toHsl()).slice(0, -1)
    const cmyk = Object.values(colord(color).toCmyk()).slice(0, -1)
    const tints = offsets.map((offset) => colord(color).lighten(offset).toHex())


    //todo set all pretty to uppercase?

    return {
        hex: {
            value: hex,
            pretty: hex,
        },
        rgb: {
            value: rgb,
            pretty: colord(hex).toRgbString()
        },
        hsl: {
            value: hsl,
            pretty: colord(hex).toHslString()
        },
        cmyk: {
            value: cmyk,
            pretty: colord(hex).toCmykString()
        },
        tints
    }
}
