import "./App.css";
import CurrentColorDrawer from "./components/CurrentColorDrawer/CurrentColorDrawer";
import PreviousColorsDrawer from "./components/PreviousColorsDrawer/PreviousColorsDrawer";
import FavoriteColorsDrawer from "./components/FavoriteColorsDrawer/FavoriteColorsDrawer";
import PaletteDrawer from "./components/PaletteDrawer/PaletteDrawer";
import Image from "./components/Image/Image";
import Nav from "./components/Nav/Nav";
import Toast from "./components/Toast/Toast";

import { useStore } from "./stores/useStore";
import Overlay from "./components/Overlay/Overlay";

//todo theres no need for two "drawers" const to exist | combine this one with the one in nav
const drawers = {
	current: CurrentColorDrawer,
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
				<Nav />
				{selectedDrawer !== "closed" ? (
					<>
						<Overlay />
						<SelectedDrawerComponent />
					</>
				) : (
					""
				)}
			</div>
			{/* //todo footer component comes here */}
		</>
	);
}

export default App;
