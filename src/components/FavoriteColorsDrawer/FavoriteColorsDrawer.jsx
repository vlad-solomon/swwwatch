import "./FavoriteColorsDrawer.scss";
import Drawer from "../Drawer/Drawer";
import ColorSquare from "../ColorSquare/ColorSquare";
import Tooltip from "../Tooltip/Tooltip";

import { useFavorite } from "../../stores/useFavorites";

export default function FavoriteColorsDrawer() {
	const favorites = useFavorite((state) => state.favorites);

	return favorites.length ? (
		<Drawer>
			{favorites.map(
				(color) => (
					// <Tooltip key={`favorite-${color}`} content={color}>
					<ColorSquare color={color} />
				)
				// </Tooltip>
			)}
		</Drawer>
	) : (
		<Drawer modifier="empty">no favorite colors</Drawer>
	);
}
