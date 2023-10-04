import "./Tooltip.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function Tooltip({ children, content, theme = "swwwatch", disabled, appendTo }) {
	return (
		<Tippy content={content} theme={theme} disabled={disabled} appendTo={appendTo}>
			{children}
		</Tippy>
	);
}
