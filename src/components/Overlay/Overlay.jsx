import "./Overlay.scss";
import { useStore } from "../../stores/useStore";
import { useEffect } from "react";

export default function Overlay() {
    const setSelectedDrawer = useStore((state) => state.setSelectedDrawer)

    function handleKeydown(e) {
        const { key } = e;
        if (key === "Escape") {
            setSelectedDrawer("closed")
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeydown)
        return () => {
            document.removeEventListener("keydown", handleKeydown)
        }
    }, [])

    return <div className="overlay" onClick={() => setSelectedDrawer("closed")}></div>;
}
