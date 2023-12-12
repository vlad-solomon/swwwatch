import "./SelectedDrawer.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "../../stores/useStore";

export default function SelectedDrawer({ drawers }) {
	const selectedDrawer = useStore((state) => state.selectedDrawer);
	const SelectedDrawerComponent = drawers[selectedDrawer];

	return (
		<AnimatePresence>
			{selectedDrawer && (
				<motion.div className="drawer__wrapper" initial={{ height: 0 }} animate={{ height: selectedDrawer ? "auto" : 0 }} exit={{ height: 0 }}>
					{selectedDrawer && <SelectedDrawerComponent />}
				</motion.div>
			)}
		</AnimatePresence>
	);
}
