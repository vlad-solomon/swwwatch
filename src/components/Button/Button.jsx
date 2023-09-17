import { forwardRef } from "react";
import "./Button.scss";
import { cva } from "class-variance-authority";

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

const Button = forwardRef(({ children, shape, onClick, icon }, ref) => {
	// todo include optional parameter for icon?
	return (
		<div ref={ref} className={buttonCVA({ shape })} onClick={onClick}>
			{icon && <img src={icon} />}
			{children}
		</div>
	);
});

export default Button;
