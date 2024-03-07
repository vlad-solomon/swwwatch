import "./App.scss";
import Image from "./components/Image/Image";
import Nav from "./components/Nav/Nav";
import Overlay from "./components/Overlay/Overlay";
import SelectedDrawer from "./components/SelectedDrawer/SelectedDrawer";
import { Toaster } from "react-hot-toast";
import useToasterOptions from "./hooks/useToasterOptions";

function App() {
	return (
		<>
			<Toaster {...useToasterOptions()} />
			<div className="app">
				<Overlay />
				<Image />
				<SelectedDrawer />
				<Nav />
			</div>
		</>
	);
}

export default App;
