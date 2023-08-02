import "./CurrentColorDrawer.scss"
import Drawer from "../Drawer/Drawer"
import ColorDetail from "../ColorDetail/ColorDetail"
import Button from "../Button/Button"

export default function CurrentColorDrawer() {
    const mockColorDetails = {
        hex: ["#555B77"],
        rgb: [85, 91, 119],
        hsl: [229, 17, 40],
        cmyk: [29, 24, 0, 53],
    }
    const mockHSLValues = [
        [mockColorDetails.hsl[0], mockColorDetails.hsl[1], Math.max(mockColorDetails.hsl[2] - 20, 0)],
        [mockColorDetails.hsl[0], mockColorDetails.hsl[1], Math.max(mockColorDetails.hsl[2] - 10, 0)],
        [...mockColorDetails.hsl],
        [mockColorDetails.hsl[0], mockColorDetails.hsl[1], Math.min(mockColorDetails.hsl[2] + 10, 100)],
        [mockColorDetails.hsl[0], mockColorDetails.hsl[1], Math.min(mockColorDetails.hsl[2] + 20, 100)],
    ]

    console.log(mockHSLValues)

    return (
        <Drawer modifier="current-color">
            <div className="color-shades">{mockHSLValues.map((color, index) => <div className="color-shades__shade" key={index} style={{ backgroundColor: `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)` }}></div>)}</div>
            <div className="color-details">
                {Object.entries(mockColorDetails).map(([type, values], index) => <ColorDetail key={index} type={type} values={values} />)}
            </div>
            <Button text="Save to favorite" />
        </Drawer>
    )
}
