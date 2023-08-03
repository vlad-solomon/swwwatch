import "./Drawer.scss"

function Drawer({ children, modifier }) {
    return (
        <div className={`drawer ${modifier ? `drawer--${modifier}` : ""}`}>{children}</div>
    )
}

export default Drawer