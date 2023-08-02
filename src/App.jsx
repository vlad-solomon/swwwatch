import "./App.css";
import CurrentColorDrawer from "./components/CurrentColorDrawer/CurrentColorDrawer";
import Image from "./components/Image/Image"
import Nav from "./components/Nav/Nav";

function App() {
    return (
        <>
            <div className="app">
                <CurrentColorDrawer />
                <Image />
                <Nav />
            </div>
            {/* //todo footer component comes here */}
        </>)
}

export default App;
