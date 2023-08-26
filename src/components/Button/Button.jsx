import "./Button.scss"
import { cva } from "class-variance-authority"

const buttonCVA = cva("button", {
    variants: {
        shape: {
            rectangle: "button--rectangle",
            square: "button--square"
        }
    },
    defaultVariants: {
        shape: "rectangle"
    }
})

function Button({ children, shape, onClick }) {
    return (
        <div className={buttonCVA({ shape })} onClick={onClick}>
            {children}
        </div>
    )
}

export default Button