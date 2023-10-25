import "./Nav.scss";
import { useState } from "react";
import { useStore } from "../../stores/useStore";
import Tutorial from "../../assets/img/tutorial.svg";

function Nav({ drawers }) {
	const selectedDrawer = useStore((state) => state.selectedDrawer);
	const setSelectedDrawer = useStore((state) => state.setSelectedDrawer);
	const [tutorial, setTutorial] = useState(true);

	return (
		<>
			<div className={`nav ${selectedDrawer ? "nav--drawer-open" : ""}`}>
				{drawers.map((drawer) => (
					<div
						key={`${drawer}-drawer}`}
						className={`nav__option ${drawer === selectedDrawer ? "nav__option--active" : ""}`}
						onClick={() => {
							setTutorial(false);
							setSelectedDrawer(drawer === selectedDrawer ? null : drawer);
						}}
					>
						<img src={new URL(`../../assets/img/${drawer === selectedDrawer ? `${drawer}-fill.svg` : `${drawer}.svg`}`, import.meta.url).href} />
					</div>
				))}
			</div>
			{tutorial && <img src={Tutorial} alt="tutorial" id="tutorial" />}
		</>
	);
}

export default Nav;
