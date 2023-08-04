import Drawer from "../Drawer/Drawer"
import ColorDetail from "../ColorDetail/ColorDetail"
import Button from "../Button/Button"
import useHSLVariations from "../../hooks/useHSLVariations"

import "./CurrentColorDrawer.scss"

export default function CurrentColorDrawer() {
    const mockColorDetails = {
        hex: "#555B77",
        rgb: [85, 91, 119],
        hsl: [229, 17, 40],
        cmyk: [29, 24, 0, 53],
    }
    const hslVariations = useHSLVariations(mockColorDetails.hsl);

    return (
        <Drawer modifier="current-color">
            <div className="color-shades">{hslVariations.map(([hue, saturation, value], index) => <div className="color-shades__shade" key={index} style={{ backgroundColor: `hsl(${hue}, ${saturation}%, ${value}%)` }}></div>)}</div>
            <div className="color-details">
                {Object.entries(mockColorDetails).map(([type, values], index) => <ColorDetail key={index} type={type} values={values} />)}
            </div>
            <Button text="Save to favorite" />
        </Drawer>
    )
}