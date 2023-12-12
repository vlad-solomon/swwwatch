import "./Nav.scss";
import { useState } from "react";
import { useStore } from "../../stores/useStore";
import Tutorial from "../../assets/img/tutorial.svg";
import { motion } from "framer-motion";

function Nav({ drawers }) {
	const selectedDrawer = useStore((state) => state.selectedDrawer);
	const setSelectedDrawer = useStore((state) => state.setSelectedDrawer);
	const [tutorial, setTutorial] = useState(true);
	const getDrawerIcon = (icon) => new URL(`/src/assets/img/${icon}.svg`, import.meta.url).href;

	return (
		<>
			<div className={`nav ${selectedDrawer ? "nav--drawer-open" : ""}`}>
				{Object.keys(drawers).map((drawer) => (
					<div
						key={`${drawer}-drawer}`}
						className={`nav__option ${drawer === selectedDrawer ? "nav__option--active" : ""}`}
						onClick={() => {
							setTutorial(false);
							setSelectedDrawer(drawer === selectedDrawer ? null : drawer);
						}}
					>
						<motion.div className="nav__option--container" whileTap={{ scale: 0.8 }}>
							{drawer === selectedDrawer ? <img src={getDrawerIcon(`${drawer}-fill`)} /> : <img src={getDrawerIcon(drawer)} />}
						</motion.div>
					</div>
				))}
			</div>
			{tutorial && <img src={Tutorial} alt="tutorial" id="tutorial" />}
		</>
	);
}

export default Nav;
