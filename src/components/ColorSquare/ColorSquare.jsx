import { forwardRef } from "react";
import "./ColorSquare.scss";

const ColorSquare = forwardRef(({ color }, ref) => {
    return <div ref={ref} className="color-square" style={{ backgroundColor: color }}></div>;
})

export default ColorSquare
