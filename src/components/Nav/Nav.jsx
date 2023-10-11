import "./Nav.scss";
import { useStore } from "../../stores/useStore";

function Nav({ drawers }) {
	const selectedDrawer = useStore((state) => state.selectedDrawer);
	const setSelectedDrawer = useStore((state) => state.setSelectedDrawer);

	return (
		<div className={`nav ${selectedDrawer ? "nav--drawer-open" : ""}`}>
			{drawers.map((drawer) => (
				<div
					key={`${drawer}-drawer}`}
					className={`nav__option ${drawer === selectedDrawer ? "nav__option--active" : ""}`}
					onClick={() => setSelectedDrawer(drawer === selectedDrawer ? null : drawer)}
				>
					<img src={new URL(`../../assets/img/${drawer === selectedDrawer ? `${drawer}-fill.svg` : `${drawer}.svg`}`, import.meta.url).href} />
				</div>
			))}
		</div>
	);
}

export default Nav;
