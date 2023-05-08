import { Reducer } from "@/reducers/Reducer";
import {Item} from "@/gildedRose";

export class SulfurasReducer extends Reducer{
  constructor() {
    super('Sulfuras Reducer');
  }

  updateQuality(item: Item) {
    // do nothing
  }

  updateSellIn(item: Item) {
    // do nothing
  }
}
