import "./Image.scss"
import { useState } from "react"
import { useStore } from "../../stores/useStore"
import { ImageColorPicker } from "react-image-color-picker"
import { useEffect } from "react"
import { usePrevious } from "../../stores/usePrevious"
import { ReactComponent as Welcome } from "../../img/welcome.svg"
import cat from "../../img/cat.jpg"

function Image() {
    const uploadedImage = useStore((state) => state.uploadedImage)
    const setUploadedImage = useStore((state) => state.setUploadedImage)
    const setSelectedColor = useStore((state) => state.setSelectedColor)
    const setSelectedDrawer = useStore((state) => state.setSelectedDrawer)
    const addPrevious = usePrevious((state) => state.addPrevious)

    // const [canvasScale, setCanvasScale] = useState(0)

    function handleColorPick(color) {
        setSelectedColor(color)
        addPrevious(color)
        setSelectedDrawer("current")
    }

    // todo look into framer motion motionValues
    function handleResize() {
        if (!uploadedImage) return

        const parent = document.querySelector("div[data-testid='image-color-pick-container']")
        const child = document.querySelector("canvas[data-testid='image-color-pick-canvas']")

        const parentWidth = parent.clientWidth
        const parentHeight = parent.clientHeight
        const childWidth = child.clientWidth
        const childHeight = child.clientHeight

        const wScale = parentWidth / childWidth
        const hScale = parentHeight / childHeight
        const scale = Math.min(wScale, hScale)

        console.log("calculating scale...")

        child.style.transform = `scale(${scale})`

    }

    useEffect(() => {
        const removedElements = document.querySelectorAll("div[data-testid='color-preview'], div[data-testid='zoom-preview-container']");
        removedElements.forEach(removedElement => {
            removedElement.parentNode.removeChild(removedElement)
        })

        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        uploadedImage
            ?
            <div className="image">
                <img src={uploadedImage} className="image__bg" />
                <ImageColorPicker onColorPick={handleColorPick} imgSrc={uploadedImage} />
            </div>
            :
            <div className="image image--welcome">
                <Welcome />
                <span>Paste or drag and drop your image here</span>
            </div>
    )
}

export default Image