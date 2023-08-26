import "./ColorDetail.scss"
import Button from "../Button/Button"
import { ReactComponent as Copy } from "../../img/copy.svg"

function ColorDetail({ type, values, pretty }) {
    return (
        <div className="color-detail__wrapper">
            <div className="color-detail">
                <div className="color-detail__type">{type}</div>
                <div className="color-detail__values">{Array.isArray(values) ? values.map((value, index) => <span key={index}>{value}</span>) : <span>{values}</span>}</div>
            </div>
            <Button shape="square" onClick={() => navigator.clipboard.writeText(pretty)}>
                <Copy />
            </Button>
        </div>
    )
}

//todo display notification when color is copied to clipboard

export default ColorDetail