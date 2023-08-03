import "./PreviousColorsDrawer.scss";
import Drawer from "../Drawer/Drawer"
import ColorSquare from "../ColorSquare/ColorSquare";

export default function PreviousColorsDrawer() {
    const mockPreviousColors = Array(25).fill("#555B77")
    return <Drawer>{mockPreviousColors.map((color) => <ColorSquare color={color} />)}</Drawer>
}
