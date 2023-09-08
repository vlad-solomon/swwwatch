import "./ColorDetail.scss"
import Button from "../Button/Button"
import { ReactComponent as Copy } from "../../img/copy.svg"
import Tooltip from "../Tooltip/Tooltip"
import toast from "react-hot-toast"

function ColorDetail({ type, values, pretty }) {

    return (
        <div className="color-detail__wrapper">
            <div className="color-detail">
                <div className="color-detail__type">{type}</div>
                <div className="color-detail__values">{Array.isArray(values) ? values.map((value, index) => <span key={index}>{value}</span>) : <span>{values}</span>}</div>
            </div>
            <Tooltip content={
                <>
                    <span>{pretty}</span>
                    <span>Click to copy</span>
                </>
            }>
                <Button shape="square" onClick={() => {
                    navigator.clipboard.writeText(pretty)
                    toast((t) => (
                        <>
                            <span>Copied {pretty} to clipboard!</span>
                            <span onClick={() => toast.dismiss(t.id)}>X</span>
                        </>
                    ))
                }}>
                    <Copy />
                </Button>
            </Tooltip >
        </div >
    )
}

//todo display notification when color is copied to clipboard

export default ColorDetail