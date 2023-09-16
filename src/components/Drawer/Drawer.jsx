import "./Drawer.scss";

function Drawer({ children, modifier }) {
	// todo set the default modifier to empty?
	return <div className={`drawer ${modifier ? `drawer--${modifier}` : ""}`}>{children}</div>;
}

export default Drawer;
