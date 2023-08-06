import Drawer from "../Drawer/Drawer"
import ColorDetail from "../ColorDetail/ColorDetail"
import Button from "../Button/Button"
import useColor from "../../hooks/useColor"

import "./CurrentColorDrawer.scss"

import { useStore } from "../../stores/useStore"
import { useState } from "react"

export default function CurrentColorDrawer() {
    const selectedColor = useStore((state) => state.selectedColor)
    const [isGradient, setIsGradient] = useState(false)
    const { hex, rgb, hsl, cmyk, tints } = useColor(selectedColor)

    return (
        selectedColor !== null ?
            <Drawer modifier="current-color">
                <div className="color-shades">
                    {tints.map((color, index) => <div className="color-shades__shade" key={index} style={{ backgroundColor: color }}></div>)}
                    <span className="color-shades__toggle" onClick={() => setIsGradient((prev) => !prev)}>Toggle gradient</span>
                    {isGradient && <div className="color-shades__gradient" style={{ background: `linear-gradient(90deg, ${tints.join(",")})` }}></div>}
                </div>
                <div className="color-details">
                    {Object.entries({ hex, rgb, hsl, cmyk }).map(([type, values], index) => <ColorDetail key={index} type={type} values={values} />)}
                </div>
                <Button text="Save to favorites" />
            </Drawer>
            :
            <Drawer modifier="empty">
                no color
            </Drawer>
    )
}