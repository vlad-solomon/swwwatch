import "./Drawer.scss";
import { useEffect } from "react";

function Drawer({ children, modifier = "empty" }) {
	function handleDrawerScroll() {
		for (const popper of document.querySelectorAll("div[data-tippy-root]")) {
			const instance = popper._tippy;
			if (instance.state.isVisible) instance.hide();
		}
	}

	useEffect(() => {
		document.querySelector(".drawer")?.addEventListener("scroll", handleDrawerScroll);
		return () => {
			document.querySelector(".drawer")?.removeEventListener("scroll", handleDrawerScroll);
		};
	}, []);

	return <div className={`drawer ${modifier && `drawer--${modifier}`}`}>{children}</div>;
}

export default Drawer;
