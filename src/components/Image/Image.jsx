import "./Image.scss"
import { useStore } from "../../stores/useStore"
import image from "./test.png"
import { ImageColorPicker } from "react-image-color-picker"

function Image() {
    const setSelectedColor = useStore((state) => state.setSelectedColor)
    const setSelectedDrawer = useStore((state) => state.setSelectedDrawer)

    function handleColorPick(color) {
        setSelectedColor(color)
        setSelectedDrawer("current")
    }

    return (
        <div className="image">
            <img src={image} className="image__bg" />
            <ImageColorPicker onColorPick={handleColorPick} imgSrc={image} zoom={0.5} />
        </div>
    )
}

export default Image