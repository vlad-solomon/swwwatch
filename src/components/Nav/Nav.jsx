import "./Nav.scss";
import { ReactComponent as Color } from "../../img/color.svg";
import { ReactComponent as Favorite } from "../../img/favorite.svg";
import { ReactComponent as Previous } from "../../img/previous.svg";
import { ReactComponent as Palette } from "../../img/palette.svg";
import { useStore } from "../../stores/useStore";

const drawers = {
	current: Color,
	favorite: Favorite,
	previous: Previous,
	palette: Palette,
};

//todo add color-theme generator

function Nav() {
	const selectedDrawer = useStore((state) => state.selectedDrawer);
	const setSelectedDrawer = useStore((state) => state.setSelectedDrawer);

	return (
		<div className={`nav ${selectedDrawer !== "closed" ? "nav--drawer-open" : ""}`}>
			{Object.entries(drawers).map(([drawer, Icon]) => (
				<Icon key={drawer} onClick={() => setSelectedDrawer(drawer === selectedDrawer ? "closed" : drawer)} className={drawer === selectedDrawer ? "filled" : ""} />
			))}
		</div>
	);
}

export default Nav;
