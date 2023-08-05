import Drawer from "../Drawer/Drawer"
import ColorDetail from "../ColorDetail/ColorDetail"
import Button from "../Button/Button"
import useHSLVariations from "../../hooks/useHSLVariations"
import useColor from "../../hooks/useColor"

import "./CurrentColorDrawer.scss"
import { useStore } from "../../stores/useStore"

export default function CurrentColorDrawer() {
    const selectedColor = useStore((state) => state.selectedColor)
    const colorDetails = useColor(selectedColor)
    const hslVariations = useHSLVariations(colorDetails.hsl);

    return (
        <Drawer modifier="current-color">
            <div className="color-shades">{hslVariations.map(([hue, saturation, value], index) => <div className="color-shades__shade" key={index} style={{ backgroundColor: `hsl(${hue}, ${saturation}%, ${value}%)` }}></div>)}</div>
            <div className="color-details">
                {Object.entries(colorDetails).map(([type, values], index) => <ColorDetail key={index} type={type} values={values} />)}
            </div>
            <Button text="Save to favorite" />
        </Drawer>
    )
}