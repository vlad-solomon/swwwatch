import "./PreviousColorsDrawer.scss";
import Drawer from "../Drawer/Drawer"
import ColorSquare from "../ColorSquare/ColorSquare";
import Tooltip from "../Tooltip/Tooltip";

import { usePrevious } from "../../stores/usePrevious"

export default function PreviousColorsDrawer() {
    const previous = usePrevious((state) => state.previous)

    return (previous.length ?
        <Drawer>
            {previous.map((color) =>
                <Tooltip key={`previous-${color}`} content={color}>
                    <ColorSquare color={color} />
                </Tooltip>
            )}
        </Drawer>
        :
        <Drawer modifier="empty">no previous colors</Drawer>
    )
}
