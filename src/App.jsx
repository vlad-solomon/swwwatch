import "./App.css";
import CurrentColorDrawer from "./components/CurrentColorDrawer/CurrentColorDrawer";
import PreviousColorsDrawer from "./components/PreviousColorsDrawer/PreviousColorsDrawer";
import FavoriteColorsDrawer from "./components/FavoriteColorsDrawer/FavoriteColorsDrawer"
import Image from "./components/Image/Image"
import Nav from "./components/Nav/Nav";

import { useStore } from "./stores/useStore";
import Overlay from "./components/Overlay/Overlay";
import { Toaster } from "react-hot-toast";

const drawers = {
    current: CurrentColorDrawer,
    favorite: FavoriteColorsDrawer,
    previous: PreviousColorsDrawer,
}

function App() {
    const selectedDrawer = useStore((state) => state.selectedDrawer)
    const SelectedDrawerComponent = drawers[selectedDrawer]

    return (
        <>
            <Toaster gutter={10} />
            <div className="app">
                {selectedDrawer !== "closed" ? <SelectedDrawerComponent /> : ""}
                <Image />
                <Nav />
                {selectedDrawer !== "closed" ? <Overlay /> : ""}
            </div>
            {/* //todo footer component comes here */}
        </>)
}

export default App;
