import "./Image.scss"
import { useState, useEffect, useRef } from "react"
import { useStore } from "../../stores/useStore"
import { ImageColorPicker } from "react-image-color-picker"
import { usePrevious } from "../../stores/usePrevious"
import { ReactComponent as Welcome } from "../../img/welcome.svg"
import useColor from "../../hooks/useColor"

function Image() {
    const uploadedImage = useStore((state) => state.uploadedImage)
    const setUploadedImage = useStore((state) => state.setUploadedImage)
    const setSelectedColor = useStore((state) => state.setSelectedColor)
    const setSelectedDrawer = useStore((state) => state.setSelectedDrawer)
    const addPrevious = usePrevious((state) => state.addPrevious)
    //todo look more into imgDetails
    const [imgDetails, setImgDetails] = useState({})
    const containerRef = useRef();

    function handleColorPick(color) {
        const { hex } = useColor(color);
        setSelectedColor(hex.value);
        addPrevious(hex.value)
        setSelectedDrawer("current")
    }


    async function loadImage(src) {
        return new Promise((resolve, reject) => {
            const img = document.createElement("img")
            img.src = src
            img.onload = () => resolve({ height: img.height, width: img.width })
            img.onerror = reject
        })
    }

    function handleResize(height, width) {
        if (!containerRef.current) return

        const canvas = containerRef.current.querySelector("canvas")
        const hScale = containerRef.current.clientHeight / height
        const wScale = containerRef.current.clientWidth / width
        const scale = Math.min(wScale, hScale)

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
        loadImage(data).then(({ height, width }) => {
            setImgDetails({ height, width })
            handleResize(height, width)
        })

    }

    useEffect(() => {
        const removedElements = document.querySelectorAll("div[data-testid='color-preview'], div[data-testid='zoom-preview-container']");
        removedElements.forEach(removedElement => removedElement.parentNode.removeChild(removedElement))

        document.addEventListener("paste", handlePaste);
        window.addEventListener("resize", () => {
            handleResize(imgDetails.height, imgDetails.width)
        });
        return () => {
            document.removeEventListener("paste", handlePaste)
            window.removeEventListener("resize", handleResize)
        }
    }, [imgDetails])

    return (
        uploadedImage
            ?
            <div className="image" ref={containerRef}>
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