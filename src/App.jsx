import "./App.css";
import CurrentColorDrawer from "./components/CurrentColorDrawer/CurrentColorDrawer";
import PreviousColorsDrawer from "./components/PreviousColorsDrawer/PreviousColorsDrawer";
import FavoriteColorsDrawer from "./components/FavoriteColorsDrawer/FavoriteColorsDrawer"
import Image from "./components/Image/Image"
import Nav from "./components/Nav/Nav";

function App() {
    return (
        <>
            <div className="app">
                {/* <CurrentColorDrawer /> */}
                {/* <PreviousColorsDrawer /> */}
                {/* <FavoriteColorsDrawer /> */}
                <Image />
                <Nav />
            </div>
            {/* //todo footer component comes here */}
        </>)
}

export default App;
