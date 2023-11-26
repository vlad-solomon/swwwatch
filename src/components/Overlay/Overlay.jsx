import "./Overlay.scss";
import { useStore } from "../../stores/useStore";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Overlay() {
	const setSelectedDrawer = useStore((state) => state.setSelectedDrawer);
	const selectedDrawer = useStore((state) => state.selectedDrawer);

	function handleKeydown(e) {
		const { key } = e;
		if (key === "Escape") setSelectedDrawer(null);
	}

	useEffect(() => {
		document.addEventListener("keydown", handleKeydown);
		return () => {
			document.removeEventListener("keydown", handleKeydown);
		};
	}, []);

	return (
		<AnimatePresence>
			{selectedDrawer && (
				<motion.div
					className="overlay"
					onClick={() => setSelectedDrawer(null)}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.15 }}
				></motion.div>
			)}
		</AnimatePresence>
	);
}
