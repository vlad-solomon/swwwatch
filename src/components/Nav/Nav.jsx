import "./Nav.scss"
import Color from "./color.svg"
import Favorite from "./favorite.svg"
import Previous from "./previous.svg"

function Nav() {
    return (
        <div className="nav">
            {[Color, Favorite, Previous].map((icon, index) => {
                return <img src={icon} key={index} />
            })}
        </div>
    )
}

export default Nav