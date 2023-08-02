import "./Button.scss"

function Button({ text = "TEXT" }) {
    return (
        <div className="button">{text}</div>
    )
}

export default Button