import "./Button.scss";
import { cva } from "class-variance-authority";
import Tooltip from "../Tooltip/Tooltip";
import { motion } from "framer-motion";

const buttonCVA = cva("button", {
	variants: {
		shape: {
			wide: "button--wide",
			square: "button--square",
		},
	},
	defaultVariants: {
		shape: "wide",
	},
});

function Button({ text, shape, icon, tooltip, onClick }) {
	return (
		<Tooltip disabled={!tooltip} content={tooltip}>
			<motion.div whileTap={{ scale: shape === "square" ? 0.8 : 0.95 }} className={buttonCVA({ shape })} onClick={onClick}>
				<motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={text}>
					{icon && <img src={icon} />}
					{text}
				</motion.span>
			</motion.div>
		</Tooltip>
	);
}

export default Button;
