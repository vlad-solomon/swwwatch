import "./PreviousColorsDrawer.scss";
import Drawer from "../Drawer/Drawer"
import ColorSquare from "../ColorSquare/ColorSquare";

import { usePrevious } from "../../stores/usePrevious"

export default function PreviousColorsDrawer() {
    const previous = usePrevious((state) => state.previous)

    return <Drawer>{previous.map((color) => <ColorSquare key={`previous-${color}`} color={color} />)}</Drawer>
}
