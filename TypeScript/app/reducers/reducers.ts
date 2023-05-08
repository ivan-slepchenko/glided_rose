import { AgedBrieReducer } from "@/reducers/AgedBrieReducer";
import { SulfurasReducer } from "@/reducers/SulfurasReducer";
import { BackstageReducer } from "@/reducers/BackstageReducer";
import { RegularReducer } from "@/reducers/RegularReducer";
import { Item } from "@/gildedRose";

export const REGULAR_REDUCER = new RegularReducer();
export const AGED_BRIE_REDUCER = new AgedBrieReducer();
export const SULFURAS_REDUCER = new SulfurasReducer();
export const BACKSTAGE_REDUCER = new BackstageReducer();

export const getReducerForItem = (item: Item) => {
  const lowerCaseName = item.name.toLowerCase();
  if (lowerCaseName.indexOf('aged brie') !== -1) {
    return AGED_BRIE_REDUCER;
  } else if (lowerCaseName.indexOf('sulfuras') !== -1) {
    return SULFURAS_REDUCER;
  } else if (lowerCaseName.indexOf('backstage passes') !== -1) {
    return BACKSTAGE_REDUCER;
  } else {
    return REGULAR_REDUCER
  }
}
