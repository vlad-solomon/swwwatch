import "./FavoriteColorsDrawer.scss";
import Drawer from "../Drawer/Drawer";
import ColorSquare from "../ColorSquare/ColorSquare";
import { useFavorite } from "../../stores/useFavorites";
import Favorite from "../../assets/img/favorite.svg";
import Button from "../../components/Button/Button";
import { useStore } from "../../stores/useStore";

export default function FavoriteColorsDrawer() {
	const favorites = useFavorite((state) => state.favorites);
	const setSelectedModal = useStore((state) => state.setSelectedModal);

	return favorites.length ? (
		<Drawer modifier="favorite-colors">
			{favorites.map((color) => (
				<ColorSquare key={`favorite-${color}`} color={color} />
			))}
			<Button shape="square" intent="secondary" text="R" onClick={() => setSelectedModal("favorites")} />
		</Drawer>
	) : (
		<Drawer>
			<img src={Favorite} alt="favorite" />
			<span>Use the favorite button to save any color you like</span>
		</Drawer>
	);
}
