import "./Nav.scss";
import { useStore } from "../../stores/useStore";

function Nav({ drawers }) {
	const selectedDrawer = useStore((state) => state.selectedDrawer);
	const setSelectedDrawer = useStore((state) => state.setSelectedDrawer);

	return (
		<div className={`nav ${selectedDrawer ? "nav--drawer-open" : ""}`}>
			{Object.entries(drawers).map(([drawer, _]) => (
				<img
					key={`${drawer}-drawer`}
					src={drawer === selectedDrawer ? `/${drawer}-fill.svg\\` : `/${drawer}.svg\\`}
					onClick={() => setSelectedDrawer(drawer === selectedDrawer ? null : drawer)}
				/>
			))}
		</div>
	);
}

export default Nav;
