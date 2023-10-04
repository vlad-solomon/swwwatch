import "./Tooltip.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function Tooltip({ children, content, theme = "swwwatch", disabled, appendTo }) {
	// todo for some reason tooltips dont use the right (and left?) placements when top and bottom isn't available causing the to clip out of the parent (only those tooltips that append to "parent")
	return (
		<Tippy content={content} theme={theme} disabled={disabled} appendTo={appendTo}>
			{children}
		</Tippy>
	);
}
