import { RegularReducer } from "@/reducers/RegularReducer";
import {Item} from "@/gildedRose";

export class SulfurasReducer extends RegularReducer{

  static NAME: string = 'Sulfuras Reducer';

  constructor() {
    super(SulfurasReducer.NAME);
  }

  updateQuality(item: Item) {
    // do nothing
  }

  updateSellIn(item: Item) {
    // do nothing
  }
}
