import "./ColorDetail.scss"
import Button from "../Button/Button"
import { ReactComponent as Copy } from "../../img/copy.svg"
import Tooltip from "../Tooltip/Tooltip"
import toast from "react-hot-toast"
import { ReactComponent as Close } from "../../img/close.svg"

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
                    toast(({ id }) => (
                        <>
                            <span>Copied <span className="toast__pretty">{pretty}</span> to clipboard!</span>
                            <Close onClick={() => toast.dismiss(id)} />
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