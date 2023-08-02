import "./ColorDetail.scss"

function ColorDetail({ type, values }) {
    return (
        <div className="color-detail__wrapper">
            <div className="color-detail">
                <div className="color-detail__type">{type}</div>
                <div className="color-detail__values">{values.map((value, index) => <span key={index}>{value}</span>)}</div>
            </div>
            <div className="mock-button">C</div>
        </div>
    )
}

export default ColorDetail