import {Item} from "@/gildedRose";
import {AGED_BRIE, BACKSTAGE, SULFURAS} from "@/itemNames";
import AgedBrieReducer from "@/reducers/AgedBrieReducer";
import SulfurasReducer from "@/reducers/SulfurasReducer";
import BackstageReducer from "@/reducers/BackstageReducer";

class Reducer {

  static REGULAR_REDUCER = new Reducer();
  static AGED_BRIE_REDUCER = new AgedBrieReducer();
  static SULFURAS_REDUCER = new SulfurasReducer();
  static BACKSTAGE_REDUCER = new BackstageReducer();

  static getReducerForItem(item: Item) {
    switch (item.name) {
      case AGED_BRIE: return Reducer.AGED_BRIE_REDUCER;
      case SULFURAS: return Reducer.SULFURAS_REDUCER;
      case BACKSTAGE: return Reducer.BACKSTAGE_REDUCER;
      default: return Reducer.REGULAR_REDUCER
    }
  }

  name: string;

  constructor(name: string = 'Regular Reducer') {
    this.name = name;
  }

  reduce(item: Item) {

  }
}

export default Reducer;
