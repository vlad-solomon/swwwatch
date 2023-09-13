import { useState } from "react";
import { toast } from "react-hot-toast";
import useColor from "../../hooks/useColor";
import { ReactComponent as Close } from "../../img/close.svg";
import { useFavorite } from "../../stores/useFavorites";
import { usePrevious } from "../../stores/usePrevious";
import { useStore } from "../../stores/useStore";
import Button from "../Button/Button";
import ColorDetail from "../ColorDetail/ColorDetail";
import Drawer from "../Drawer/Drawer";
import Tooltip from "../Tooltip/Tooltip";
import "./CurrentColorDrawer.scss";

export default function CurrentColorDrawer() {
	const selectedColor = useStore((state) => state.selectedColor);
	const setSelectedColor = useStore((state) => state.setSelectedColor);
	const favorites = useFavorite((state) => state.favorites);
	const setFavorites = useFavorite((state) => state.setFavorites);
	const addPrevious = usePrevious((state) => state.addPrevious);

	const [isGradient, setIsGradient] = useState(false);
	const { hex, rgb, hsl, cmyk, tints } = useColor(selectedColor);

	return selectedColor ? (
		<Drawer modifier="current-color">
			<div className="color-shades">
				{tints.map((color, index) => (
					<Tooltip key={index} content={color}>
						<div
							className={`color-shades__shade ${color === selectedColor ? "color-shades__shade--selected-color" : ""}`}
							style={{
								backgroundColor: color,
							}}
							onClick={() => {
								if (color === selectedColor) return;
								setSelectedColor(color);
								addPrevious(color);
							}}
						></div>
					</Tooltip>
				))}
				<span className="color-shades__toggle" onClick={() => setIsGradient((prev) => !prev)}>
					Toggle gradient
				</span>
				{isGradient && <div className="color-shades__gradient" style={{ background: `linear-gradient(90deg, ${tints.join(",")})` }}></div>}
			</div>
			<div className="color-details">
				{Object.entries({ hex, rgb, hsl, cmyk }).map(([type, details], index) => (
					<ColorDetail key={index} type={type} values={details.value} pretty={details.pretty} />
				))}
			</div>
			<Button
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
			</Button>
		</Drawer>
	) : (
		<Drawer modifier="empty">no color</Drawer>
	);
}
//todo look for a class called .filled and get rid of it */
