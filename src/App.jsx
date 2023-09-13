import "./App.css";
import { useStore } from "./stores/useStore";
import Image from "./components/Image/Image";
import Nav from "./components/Nav/Nav";
import Toast from "./components/Toast/Toast";
import Overlay from "./components/Overlay/Overlay";

import CurrentColorDrawer from "./components/CurrentColorDrawer/CurrentColorDrawer";
import PreviousColorsDrawer from "./components/PreviousColorsDrawer/PreviousColorsDrawer";
import FavoriteColorsDrawer from "./components/FavoriteColorsDrawer/FavoriteColorsDrawer";
import PaletteDrawer from "./components/PaletteDrawer/PaletteDrawer";

const drawers = {
	color: CurrentColorDrawer,
	favorite: FavoriteColorsDrawer,
	previous: PreviousColorsDrawer,
	palette: PaletteDrawer,
};

function App() {
	const selectedDrawer = useStore((state) => state.selectedDrawer);
	const SelectedDrawerComponent = drawers[selectedDrawer];

	return (
		<>
			<Toast />
			<div className="app">
				<Image />
				<Nav drawers={drawers} />
				{selectedDrawer && (
					<>
						<Overlay />
						<SelectedDrawerComponent />
					</>
				)}
			</div>
			{/* //todo footer component comes here */}
		</>
	);
}

export default App;
