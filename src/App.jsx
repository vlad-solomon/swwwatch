import "./App.css";
import { useStore } from "./stores/useStore";
import Image from "./components/Image/Image";
import Nav from "./components/Nav/Nav";
import Overlay from "./components/Overlay/Overlay";

import CurrentColorDrawer from "./components/CurrentColorDrawer/CurrentColorDrawer";
import PreviousColorsDrawer from "./components/PreviousColorsDrawer/PreviousColorsDrawer";
import FavoriteColorsDrawer from "./components/FavoriteColorsDrawer/FavoriteColorsDrawer";
import PaletteDrawer from "./components/PaletteDrawer/PaletteDrawer";
import { Toaster } from "react-hot-toast";

const drawers = {
	color: CurrentColorDrawer,
	favorite: FavoriteColorsDrawer,
	previous: PreviousColorsDrawer,
	palette: PaletteDrawer,
};

//todo favicon

function App() {
	const selectedDrawer = useStore((state) => state.selectedDrawer);
	const SelectedDrawerComponent = drawers[selectedDrawer];

	return (
		<>
			<Toaster
				gutter={10}
				containerClassName="toaster"
				toastOptions={{
					className: "toast",
					duration: 1500,
				}}
			/>
			<div className="app">
				<Image />
				<Nav drawers={Object.keys(drawers)} />
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

// todo add way to reset image
