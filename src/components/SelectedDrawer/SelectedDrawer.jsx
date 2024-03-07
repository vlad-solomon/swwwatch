import "./SelectedDrawer.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "../../stores/useStore";
import useDrawers from "../../hooks/useDrawers";
import { useMotionValue } from "framer-motion";

export default function SelectedDrawer() {
	const drawers = useDrawers();
	const selectedDrawer = useStore((state) => state.selectedDrawer);
	const SelectedDrawerComponent = drawers[selectedDrawer];
	const overflow = useMotionValue("auto");

	return (
		<AnimatePresence>
			{selectedDrawer && (
				<motion.div
					className="drawer__wrapper"
					initial={{ height: 0 }}
					animate={{ height: selectedDrawer ? "fit-content" : 0 }}
					exit={{ height: 0 }}
					onAnimationStart={() => overflow.set("hidden")}
					onAnimationComplete={() => overflow.set("auto")}
					style={{ overflow }}
				>
					{selectedDrawer && <SelectedDrawerComponent />}
				</motion.div>
			)}
		</AnimatePresence>
	);
}
