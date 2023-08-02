import "./Nav.scss"
import Color from "./color.svg"
import Favorite from "./favorite.svg"
import Previous from "./previous.svg"
import { useStore } from "../../stores/useStore"

const states = [
    {
        state: "color",
        icon: Color,
    },
    {
        state: "favorite",
        icon: Favorite,
    },
    {
        state: "previous",
        icon: Previous
    },
]

function Nav() {
    const setDrawer = useStore((state) => state.setDrawer)
    return (
        <div className="nav">
            {states.map(({ state, icon }, index) => <img onClick={() => setDrawer(state)} src={icon} alt={state} key={index} />)}
        </div>
    )
}

export default Nav