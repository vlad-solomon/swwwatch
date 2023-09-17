// import { useState } from "react";
import { toast } from "react-hot-toast";
import useColor from "../../hooks/useColor";
import { ReactComponent as Close } from "../../img/close.svg";
import { useFavorite } from "../../stores/useFavorites";
import { usePrevious } from "../../stores/usePrevious";
import { useStore } from "../../stores/useStore";
import Button from "../Button/Button";
import ColorDetail from "../ColorDetail/ColorDetail";
import Drawer from "../Drawer/Drawer";
// import Tooltip from "../Tooltip/Tooltip";
import "./CurrentColorDrawer.scss";
import ColorShades from "../ColorShades/ColorShades";

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
			{/* // todo this need some serious cleaning v V v */}
			{/* <Button
				onClick={() => {
					setFavorites(selectedColor);
					toast(({ id }) => (
						<>
							{favorites.includes(selectedColor) ? (
								<span>
									Removed <span className="toast__pretty">{selectedColor}</span> from favorites
								</span>
							) : (
								<span>
									Added <span className="toast__pretty">{selectedColor}</span> to favorites
								</span>
							)}
							<Close onClick={() => toast.dismiss(id)} />
						</>
					));
				}}
			>
				{favorites.includes(selectedColor) ? (
					<>
						<img src="/favorite-fill.svg" /> Remove from favorites
					</>
				) : (
					<>
						<img src="/favorite.svg" /> Add to favorites
					</>
				)}
			</Button> */}
			<Button
				icon={isFavorite ? "/favorite-fill.svg" : "/favorite.svg"}
				onClick={() => {
					setFavorites(selectedColor);
				}}
			>
				{isFavorite ? "Remove from favorites" : "Add to favorites"}
			</Button>
		</Drawer>
	) : (
		<Drawer modifier="empty">no color</Drawer>
	);
}
