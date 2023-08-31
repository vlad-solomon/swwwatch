import "./Image.scss"
import { useState, useEffect } from "react"
import { useStore } from "../../stores/useStore"
import { ImageColorPicker } from "react-image-color-picker"
import { usePrevious } from "../../stores/usePrevious"
import { ReactComponent as Welcome } from "../../img/welcome.svg"
import cat from "../../img/cat.jpg"
import useColor from "../../hooks/useColor"

function Image() {
    const uploadedImage = useStore((state) => state.uploadedImage)
    const setUploadedImage = useStore((state) => state.setUploadedImage)
    const setSelectedColor = useStore((state) => state.setSelectedColor)
    const setSelectedDrawer = useStore((state) => state.setSelectedDrawer)
    const addPrevious = usePrevious((state) => state.addPrevious)

    const [imageDetails, setImageDetails] = useState({})

    function handleColorPick(color) {
        const { hex } = useColor(color);
        setSelectedColor(hex.value);
        addPrevious(hex.value)
        setSelectedDrawer("current")
    }

    // todo look into framer motion motionValues
    function handleResize() {
        if (!uploadedImage) return

        const parent = document.querySelector("div[data-testid='image-color-pick-container']")
        const child = document.querySelector(".image__bg")

        const parentWidth = parent.clientWidth
        const parentHeight = parent.clientHeight
        child.addEventListener("load", () => setImageDetails({ childWidth: child.naturalWidth, childHeight: child.naturalHeight }))

        const wScale = parentWidth / imageDetails.childWidth
        const hScale = parentHeight / imageDetails.childHeight
        const scale = Math.min(wScale, hScale)

        const canvas = document.querySelector("canvas[data-testid='image-color-pick-canvas']")
        canvas.style.transform = `scale(${scale})`

    }

    function handlePaste(event) {
        const clipboardItems = event.clipboardData.items;
        const items = [].slice.call(clipboardItems).filter(function (item) {
            return item.type.indexOf("image") !== -1;
        });
        if (items.length === 0) return;
        const item = items[0];
        const blob = item.getAsFile();
        const data = URL.createObjectURL(blob);

        setUploadedImage(data)
    }

    useEffect(() => {
        const removedElements = document.querySelectorAll("div[data-testid='color-preview'], div[data-testid='zoom-preview-container']");
        removedElements.forEach(removedElement => removedElement.parentNode.removeChild(removedElement))

        document.addEventListener("paste", handlePaste)
        return () => {
            document.removeEventListener("paste", handlePaste)
        }
    }, [])

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [imageDetails])

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