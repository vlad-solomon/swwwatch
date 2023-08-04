import "./Image.scss"
import { useStore } from "../../stores/useStore"

function Image() {
    const selectedDrawer = useStore((state) => state.selectedDrawer)

    return (
        <div className="image">{selectedDrawer}</div>
    )
}

export default Image