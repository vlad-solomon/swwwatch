import "./ColorSquare.scss";

export default function ColorSquare({ color }) {
    return <div className="color-square" style={{ backgroundColor: color }}></div>;
}
