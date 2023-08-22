import "./Image.scss"
import { useStore } from "../../stores/useStore"
import image from "./test.png"
import cat from "./cat.jpg"
import { ImageColorPicker } from "react-image-color-picker"
import { useEffect } from "react"

function Image() {
    const setSelectedColor = useStore((state) => state.setSelectedColor)
    const setSelectedDrawer = useStore((state) => state.setSelectedDrawer)

    function handleColorPick(color) {
        setSelectedColor(color)
        setSelectedDrawer("current")
    }

    useEffect(() => {
        const removedElements = document.querySelectorAll("div[data-testid='color-preview'], div[data-testid='zoom-preview-container']");
        removedElements.forEach(removedElement => {
            removedElement.parentNode.removeChild(removedElement)
        })
    }, [])

    return (
        <div className="image">
            <img src={cat} className="image__bg" />
            <ImageColorPicker onColorPick={handleColorPick} imgSrc={cat} />
        </div>
    )
}

export default Image