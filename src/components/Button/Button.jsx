import { forwardRef } from "react";
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

const Button = forwardRef(({ text, shape, onClick, icon, tooltip }, ref) => {
	return (
		<Tooltip disabled={!tooltip} content={tooltip}>
			<motion.div whileTap={{ scale: shape === "square" ? 0.8 : 0.95 }} ref={ref} className={buttonCVA({ shape })} onClick={onClick}>
				{icon && <img src={icon} />}
				{text}
			</motion.div>
		</Tooltip>
	);
});

export default Button;
