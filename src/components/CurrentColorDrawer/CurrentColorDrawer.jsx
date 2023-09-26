import { toast } from "react-hot-toast";
import useColor from "../../hooks/useColor";
import { useFavorite } from "../../stores/useFavorites";
import { usePrevious } from "../../stores/usePrevious";
import { useStore } from "../../stores/useStore";
import Button from "../Button/Button";
import ColorDetail from "../ColorDetail/ColorDetail";
import ColorShades from "../ColorShades/ColorShades";
import Drawer from "../Drawer/Drawer";
import Toast from "../Toast/Toast";
import "./CurrentColorDrawer.scss";
import FavoriteFilled from "../../assets/img/favorite-fill.svg";
import Favorite from "../../assets/img/favorite.svg";

// todo clean comments

export default function CurrentColorDrawer() {
	const selectedColor = useStore((state) => state.selectedColor);
	const setSelectedColor = useStore((state) => state.setSelectedColor);
	const favorites = useFavorite((state) => state.favorites);
	const setFavorites = useFavorite((state) => state.setFavorites);
	const addPrevious = usePrevious((state) => state.addPrevious);
	const isFavorite = favorites.includes(selectedColor);

	const { hex, rgb, hsl, cmyk, tints } = useColor(selectedColor);

	return selectedColor ? (
		<Drawer modifier="current-color">
			<ColorShades
				shades={tints}
				isMatching="color-shades__shade--selected-color"
				isToggle={true}
				onClick={(color) => {
					if (color === selectedColor) return;
					setSelectedColor(color);
					addPrevious(color);
				}}
			/>
			<div className="color-details">
				{Object.entries({ hex, rgb, hsl, cmyk }).map(([type, details], index) => (
					<ColorDetail key={index} type={type} values={details.value} pretty={details.pretty} />
				))}
			</div>
			<Button
				text={isFavorite ? "Remove from favorites" : "Add to favorites"}
				icon={isFavorite ? FavoriteFilled : Favorite}
				onClick={() => {
					setFavorites(selectedColor);
					toast(({ id }) => (
						<Toast id={id}>
							{isFavorite ? (
								<span>
									Removed <span className="toast__pretty">{selectedColor}</span> from favorites
								</span>
							) : (
								<span>
									Added <span className="toast__pretty">{selectedColor}</span> to favorites
								</span>
							)}
						</Toast>
					));
				}}
			/>
		</Drawer>
	) : (
		<Drawer>no color</Drawer>
	);
}
