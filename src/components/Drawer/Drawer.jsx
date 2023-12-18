import "./Drawer.scss";
import { useStore } from "../../stores/useStore";
import { motion } from "framer-motion";

function Drawer({ children, modifier = "empty" }) {
	const selectedDrawer = useStore((state) => state.selectedDrawer);

	//todo check bug when closing drawer
	//* animate={{ opacity: selectedDrawer ? 1 : 0 }}

	return (
		<motion.div
			key={selectedDrawer}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			// exit={{ opacity: 0 }}
			className={`drawer ${modifier && `drawer--${modifier}`}`}
			onScroll={() => {
				for (const popper of document.querySelectorAll("div[data-tippy-root]")) {
					const instance = popper._tippy;
					if (instance.state.isVisible) instance.hide();
				}
			}}
		>
			{children}
		</motion.div>
	);
}

export default Drawer;
