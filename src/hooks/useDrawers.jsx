import CurrentColorDrawer from "../components/CurrentColorDrawer/CurrentColorDrawer";
import PreviousColorsDrawer from "../components/PreviousColorsDrawer/PreviousColorsDrawer";
import FavoriteColorsDrawer from "../components/FavoriteColorsDrawer/FavoriteColorsDrawer";
import PaletteDrawer from "../components/PaletteDrawer/PaletteDrawer";

export default () => ({ color: CurrentColorDrawer, favorite: FavoriteColorsDrawer, previous: PreviousColorsDrawer, palette: PaletteDrawer });
