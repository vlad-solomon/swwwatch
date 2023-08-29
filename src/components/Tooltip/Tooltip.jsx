import "./Tooltip.scss";
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"

export default function Tooltip({ children, content, theme = "swwwatch" }) {
    return <Tippy content={content} theme={theme}>
        {children}
    </Tippy>;
}
