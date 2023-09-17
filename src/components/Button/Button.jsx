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

const Button = forwardRef(({ children, shape, onClick, icon, tooltipContent }, ref) => {
	// todo include optional parameter for icon?
	return (
		<Tooltip disabled={!tooltipContent} content={tooltipContent}>
			<div ref={ref} className={buttonCVA({ shape })} onClick={onClick}>
				{icon && <img src={icon} />}
				{children}
			</div>
		</Tooltip>
	);
});

export default Button;
