import "./Image.scss"
import { useStore } from "../../stores/useStore"

function Image() {
    const drawer = useStore((state) => state.drawer)

    return (
        <div className="image">{drawer}</div>
    )
}

export default Image