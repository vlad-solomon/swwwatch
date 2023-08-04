import "./App.css";
import CurrentColorDrawer from "./components/CurrentColorDrawer/CurrentColorDrawer";
import PreviousColorsDrawer from "./components/PreviousColorsDrawer/PreviousColorsDrawer";
import FavoriteColorsDrawer from "./components/FavoriteColorsDrawer/FavoriteColorsDrawer"
import Image from "./components/Image/Image"
import Nav from "./components/Nav/Nav";

import { useStore } from "./stores/useStore";
import Overlay from "./components/Overlay/Overlay";

const drawers = {
    current: CurrentColorDrawer,
    favorite: FavoriteColorsDrawer,
    previous: PreviousColorsDrawer,
}

function App() {
    const selectedDrawer = useStore((state) => state.selectedDrawer)
    const SelectedDrawer = drawers[selectedDrawer]

    return (
        <>
            <div className="app">
                {selectedDrawer !== "closed" ? <SelectedDrawer /> : ""}
                <Image />
                <Nav />
                {selectedDrawer !== "closed" ? <Overlay /> : ""}
            </div>
            {/* //todo footer component comes here */}
        </>)
}

export default App;
