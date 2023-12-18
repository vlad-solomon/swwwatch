import "./App.scss";
import Image from "./components/Image/Image";
import Nav from "./components/Nav/Nav";
import Overlay from "./components/Overlay/Overlay";
import SelectedDrawer from "./components/SelectedDrawer/SelectedDrawer";
import { Toaster } from "react-hot-toast";

// todo useToasterSettings?

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
				<Overlay />
				<Image />
				<SelectedDrawer />
				<Nav />
			</div>
		</>
	);
}

export default App;

//todo check if meta tags work
//todo check how i would animate text change when clicking a button and changing its state
//todo implement shimmer effect when data is changing
