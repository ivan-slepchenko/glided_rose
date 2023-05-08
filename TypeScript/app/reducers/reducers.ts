import { AgedBrieReducer } from "@/reducers/AgedBrieReducer";
import { SulfurasReducer } from "@/reducers/SulfurasReducer";
import { BackstageReducer } from "@/reducers/BackstageReducer";
import { Reducer } from "@/reducers/Reducer";
import {Item} from "@/gildedRose";
import {AGED_BRIE, BACKSTAGE, SULFURAS} from "@/itemNames";

export const REGULAR_REDUCER = new Reducer();
export const AGED_BRIE_REDUCER = new AgedBrieReducer();
export const SULFURAS_REDUCER = new SulfurasReducer();
export const BACKSTAGE_REDUCER = new BackstageReducer();

export const getReducerForItem = (item: Item) => {
  switch (item.name) {
    case AGED_BRIE: return AGED_BRIE_REDUCER;
    case SULFURAS: return SULFURAS_REDUCER;
    case BACKSTAGE: return BACKSTAGE_REDUCER;
    default: return REGULAR_REDUCER
  }
}
