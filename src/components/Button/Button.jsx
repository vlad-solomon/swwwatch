import "./Button.scss"

function Button({ children, onClick }) {
    return (
        <div className="button" onClick={onClick}>
            {children}
        </div>
    )
}

export default Button