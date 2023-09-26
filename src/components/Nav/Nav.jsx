import "./Nav.scss";
import { useStore } from "../../stores/useStore";

function Nav({ drawers }) {
	const selectedDrawer = useStore((state) => state.selectedDrawer);
	const setSelectedDrawer = useStore((state) => state.setSelectedDrawer);

	return (
		<div className={`nav ${selectedDrawer ? "nav--drawer-open" : ""}`}>
			{drawers.map((drawer) => (
				<img
					key={`${drawer}-drawer`}
					src={new URL(`../../assets/img/${drawer === selectedDrawer ? `${drawer}-fill.svg` : `${drawer}.svg`}`, import.meta.url).href}
					onClick={() => setSelectedDrawer(drawer === selectedDrawer ? null : drawer)}
				/>
			))}
		</div>
	);
}

export default Nav;
