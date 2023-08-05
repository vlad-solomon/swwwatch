import Drawer from "../Drawer/Drawer"
import ColorDetail from "../ColorDetail/ColorDetail"
import Button from "../Button/Button"
import useHSLVariations from "../../hooks/useHSLVariations"
import useColor from "../../hooks/useColor"

import "./CurrentColorDrawer.scss"
import { useStore } from "../../stores/useStore"
import { useState } from "react"

export default function CurrentColorDrawer() {
    const selectedColor = useStore((state) => state.selectedColor)
    const [isGradient, setIsGradient] = useState(false)
    const colorDetails = useColor(selectedColor)
    const hslVariations = useHSLVariations(colorDetails.hsl);

    return (
        <Drawer modifier="current-color">
            <div className="color-shades">
                {hslVariations.map(([hue, saturation, value], index) => <div className="color-shades__shade" key={index} style={{ backgroundColor: `hsl(${hue}, ${saturation}%, ${value}%)` }}></div>)}
                <span className="color-shades__toggle" onClick={() => setIsGradient((prev) => !prev)}>Toggle gradient</span>
                {isGradient && <div className="color-shades__gradient" style={{ background: `linear-gradient(90deg, ${hslVariations.map(([hue, saturation, value], index) => `hsl(${hue}, ${saturation}%, ${value}%)`)})` }}></div>}
            </div>
            <div className="color-details">
                {Object.entries(colorDetails).map(([type, values], index) => <ColorDetail key={index} type={type} values={values} />)}
            </div>
            <Button text="Save to favorite" />
        </Drawer>
    )
}