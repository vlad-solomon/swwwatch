import "./Overlay.scss";
import { useStore } from "../../stores/useStore";

export default function Overlay() {
    const setSelectedDrawer = useStore((state) => state.setSelectedDrawer)

    return <div className="overlay" onClick={() => setSelectedDrawer("closed")}></div>;
}
