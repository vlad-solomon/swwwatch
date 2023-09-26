import "./FavoriteColorsDrawer.scss";
import Drawer from "../Drawer/Drawer";
import ColorSquare from "../ColorSquare/ColorSquare";

import { useFavorite } from "../../stores/useFavorites";

export default function FavoriteColorsDrawer() {
	const favorites = useFavorite((state) => state.favorites);

	return favorites.length ? (
		<Drawer>
			{favorites.map((color) => (
				<ColorSquare key={`favorite-${color}`} color={color} />
			))}
		</Drawer>
	) : (
		<Drawer>no favorite colors</Drawer>
	);
}
