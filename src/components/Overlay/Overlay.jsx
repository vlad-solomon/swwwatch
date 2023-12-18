import "./Overlay.scss";
import Modal from "../../components/Modal/Modal";
import { useStore } from "../../stores/useStore";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useModal from "../../hooks/useModal";

export default function Overlay({ children }) {
	const selectedDrawer = useStore((state) => state.selectedDrawer);
	const setSelectedDrawer = useStore((state) => state.setSelectedDrawer);
	const setSelectedModal = useStore((state) => state.setSelectedModal);
	const modal = useModal();

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
					className={`overlay ${modal ? "overlay--open" : ""}`}
					onClick={() => {
						setSelectedDrawer(null);
						setSelectedModal(null);
					}}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.15 }}
				>
					{modal && <Modal {...modal} />}
				</motion.div>
			)}
		</AnimatePresence>
	);
}
