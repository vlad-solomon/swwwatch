import Drawer from "../Drawer/Drawer"
import ColorDetail from "../ColorDetail/ColorDetail"
import Button from "../Button/Button"
import useColor from "../../hooks/useColor"
import { ReactComponent as Favorite } from "../../img/favorite.svg"
import Tooltip from "../Tooltip/Tooltip"

import "./CurrentColorDrawer.scss"

import { useStore } from "../../stores/useStore"
import { useFavorite } from "../../stores/useFavorites"
import { useState } from "react"

export default function CurrentColorDrawer() {
    const selectedColor = useStore((state) => state.selectedColor)
    const favorites = useFavorite((state) => state.favorites)
    const setFavorites = useFavorite((state) => state.setFavorites)

    const [isGradient, setIsGradient] = useState(false)
    const { hex, rgb, hsl, cmyk, tints } = useColor(selectedColor)

    return (
        selectedColor !== null ?
            <Drawer modifier="current-color">
                <div className="color-shades">
                    {tints.map((color, index) =>
                        <Tooltip key={index} content={color} disabled={color === hex.value}>
                            <div className="color-shades__shade" style={{ backgroundColor: color }}></div>
                        </Tooltip>
                    )}
                    <span className="color-shades__toggle" onClick={() => setIsGradient((prev) => !prev)}>Toggle gradient</span>
                    {isGradient && <div className="color-shades__gradient" style={{ background: `linear-gradient(90deg, ${tints.join(",")})` }}></div>}
                </div>
                <div className="color-details">
                    {Object.entries({ hex, rgb, hsl, cmyk }).map(([type, details], index) => <ColorDetail key={index} type={type} values={details.value} pretty={details.pretty} />)}
                </div>
                <Button onClick={() => setFavorites(selectedColor)}>{favorites.includes(selectedColor) ?
                    <><Favorite className="filled" /> Remove from favorites</>
                    :
                    <><Favorite /> Add to favorites</>}
                </Button>
            </Drawer>
            :
            <Drawer modifier="empty">
                no color
            </Drawer>
    )
}