import "./App.css";
import CurrentColorDrawer from "./components/CurrentColorDrawer/CurrentColorDrawer";
import PreviousColorsDrawer from "./components/PreviousColorsDrawer/PreviousColorsDrawer";
import FavoriteColorsDrawer from "./components/FavoriteColorsDrawer/FavoriteColorsDrawer"
import Image from "./components/Image/Image"
import Nav from "./components/Nav/Nav";

import { useStore } from "./stores/useStore";

const drawers = {
    current: CurrentColorDrawer,
    favorite: FavoriteColorsDrawer,
    previous: PreviousColorsDrawer,
}

function App() {
    const drawer = useStore((state) => state.drawer)
    const SelectedDrawer = drawers[drawer]

    return (
        <>
            <div className="app">
                {drawer !== "closed" ? <SelectedDrawer /> : ""}
                <Image />
                <Nav />
            </div>
            {/* //todo footer component comes here */}
        </>)
}

export default App;
