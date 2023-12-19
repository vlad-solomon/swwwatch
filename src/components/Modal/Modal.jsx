import "./Modal.scss";
import Button from "../Button/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "../../stores/useStore";

//todo fade out (and shrink) the other button when one of them is hovered

export default function Modal({ head = "Modal head", content = "Modal content", controls }) {
	const setSelectedDrawer = useStore((state) => state.setSelectedDrawer);
	const setSelectedModal = useStore((state) => state.setSelectedModal);
	return (
		<AnimatePresence>
			<motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={(event) => event.stopPropagation()}>
				<div className="modal__head">{head}</div>
				<div className="modal__body">
					<span className="modal__content">{content}</span>
					<div className="modal__controls">
						{controls?.map(({ text, onClick, intent }) => (
							<Button
								key={text}
								text={text}
								onClick={() => {
									onClick && onClick();
									setSelectedModal(null);
									setSelectedDrawer(null);
								}}
								intent={intent}
							/>
						))}
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}
