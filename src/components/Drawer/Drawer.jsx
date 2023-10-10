import "./Drawer.scss";

function Drawer({ children, modifier = "empty" }) {
	return (
		<div
			className={`drawer ${modifier && `drawer--${modifier}`}`}
			onScroll={() => {
				for (const popper of document.querySelectorAll("div[data-tippy-root]")) {
					const instance = popper._tippy;
					if (instance.state.isVisible) instance.hide();
				}
			}}
		>
			{children}
		</div>
	);
}

export default Drawer;
