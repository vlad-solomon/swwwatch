import "./App.scss";
import { useStore } from "./stores/useStore";
import Image from "./components/Image/Image";
import Nav from "./components/Nav/Nav";
import Overlay from "./components/Overlay/Overlay";
import CurrentColorDrawer from "./components/CurrentColorDrawer/CurrentColorDrawer";
import PreviousColorsDrawer from "./components/PreviousColorsDrawer/PreviousColorsDrawer";
import FavoriteColorsDrawer from "./components/FavoriteColorsDrawer/FavoriteColorsDrawer";
import PaletteDrawer from "./components/PaletteDrawer/PaletteDrawer";
import { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

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
			<Toaster
				gutter={10}
				containerClassName="toaster"
				toastOptions={{
					className: "toast",
					duration: 1500,
				}}
			/>
			<span style={{ position: "fixed", zIndex: "99", right: 0 }}>{JSON.stringify(selectedDrawer)}</span>
			<div className="app">
				<Image />
				<Nav drawers={Object.keys(drawers)} />
				<Overlay />
				{/* //todo wrap this into a component DrawerWrapper || DrawerController */}
				<AnimatePresence>
					{selectedDrawer && (
						<motion.div className="drawer__wrapper" initial={{ height: 0 }} animate={{ height: selectedDrawer ? "auto" : 0 }} exit={{ height: 0 }}>
							{selectedDrawer && <SelectedDrawerComponent />}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
}

export default App;

//todo check if meta tags work
//todo check how i would animate text change when clicking a button and changing its state
