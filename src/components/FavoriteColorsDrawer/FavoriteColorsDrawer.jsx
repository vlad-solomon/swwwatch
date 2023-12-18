import "./FavoriteColorsDrawer.scss";
import Drawer from "../Drawer/Drawer";
import ColorSquare from "../ColorSquare/ColorSquare";
import { useFavorite } from "../../stores/useFavorites";
import Favorite from "../../assets/img/favorite.svg";
import Button from "../../components/Button/Button";

export default function FavoriteColorsDrawer() {
	const favorites = useFavorite((state) => state.favorites);
	const clearFavorites = useFavorite((state) => state.clearFavorites);

	return favorites.length ? (
		<Drawer modifier="favorite-colors">
			{favorites.map((color) => (
				<ColorSquare key={`favorite-${color}`} color={color} />
			))}
			<Button shape="square" text="R" onClick={clearFavorites} />
		</Drawer>
	) : (
		<Drawer>
			<img src={Favorite} alt="favorite" />
			<span>Use the favorite button to save any color you like</span>
		</Drawer>
	);
}
