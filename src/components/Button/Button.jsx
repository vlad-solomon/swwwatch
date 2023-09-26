import { forwardRef } from "react";
import "./Button.scss";
import { cva } from "class-variance-authority";
import Tooltip from "../Tooltip/Tooltip";

const buttonCVA = cva("button", {
	variants: {
		shape: {
			rectangle: "button--rectangle",
			square: "button--square",
		},
	},
	defaultVariants: {
		shape: "rectangle",
	},
});

const Button = forwardRef(({ text, shape, onClick, icon, tooltip }, ref) => {
	return (
		<Tooltip disabled={!tooltip} content={tooltip}>
			<div ref={ref} className={buttonCVA({ shape })} onClick={onClick}>
				{icon && <img src={icon} />}
				{text}
			</div>
		</Tooltip>
	);
});

export default Button;
