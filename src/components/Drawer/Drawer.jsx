import "./Drawer.scss";

function Drawer({ children, modifier = "empty" }) {
	return <div className={`drawer ${modifier && `drawer--${modifier}`}`}>{children}</div>;
}

export default Drawer;
