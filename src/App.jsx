import "./App.scss";
import Image from "./components/Image/Image";
import Nav from "./components/Nav/Nav";
import Overlay from "./components/Overlay/Overlay";
import SelectedDrawer from "./components/SelectedDrawer/SelectedDrawer";
import CurrentColorDrawer from "./components/CurrentColorDrawer/CurrentColorDrawer";
import PreviousColorsDrawer from "./components/PreviousColorsDrawer/PreviousColorsDrawer";
import FavoriteColorsDrawer from "./components/FavoriteColorsDrawer/FavoriteColorsDrawer";
import PaletteDrawer from "./components/PaletteDrawer/PaletteDrawer";
import { Toaster } from "react-hot-toast";

//todo useDrawers hook?
const drawers = {
	color: CurrentColorDrawer,
	favorite: FavoriteColorsDrawer,
	previous: PreviousColorsDrawer,
	palette: PaletteDrawer,
};

function App() {
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
				<Overlay />
				<SelectedDrawer drawers={drawers} />
			</div>
		</>
	);
}

export default App;

//todo check if meta tags work
//todo check how i would animate text change when clicking a button and changing its state
