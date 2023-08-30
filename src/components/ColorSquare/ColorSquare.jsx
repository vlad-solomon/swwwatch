import { forwardRef } from "react";
import { useStore } from "../../stores/useStore";
import { usePrevious } from "../../stores/usePrevious";
import "./ColorSquare.scss";

const ColorSquare = forwardRef(({ color }, ref) => {
    const setSelectedColor = useStore((state) => state.setSelectedColor)
    const setSelectedDrawer = useStore((state) => state.setSelectedDrawer)
    const addPrevious = usePrevious((state) => state.addPrevious)


    return <div ref={ref} className="color-square" style={{ backgroundColor: color }} onClick={() => {
        setSelectedColor(color)
        setSelectedDrawer("current");
        addPrevious(color)
    }}></div>;
})

export default ColorSquare
