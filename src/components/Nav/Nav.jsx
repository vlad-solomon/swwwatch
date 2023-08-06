import "./Nav.scss"
import { ReactComponent as Color } from "./color.svg"
import { ReactComponent as Favorite } from "./favorite.svg"
import { ReactComponent as Previous } from "./previous.svg"
import { useStore } from "../../stores/useStore"

const drawers = {
    current: Color,
    favorite: Favorite,
    previous: Previous,
}

function Nav() {
    const selectedDrawer = useStore((state) => state.selectedDrawer)
    const setSelectedDrawer = useStore((state) => state.setSelectedDrawer)

    return (
        <div className={`nav ${selectedDrawer !== "closed" ? "nav--drawer-open" : ""}`}>
            {Object.entries(drawers).map(([drawer, Icon]) =>
                <Icon
                    key={drawer}
                    onClick={() => setSelectedDrawer(drawer === selectedDrawer ? "closed" : drawer)}
                    className={drawer === selectedDrawer ? "nav__selected" : ""}
                />
            )}
        </div>
    )
}

export default Nav