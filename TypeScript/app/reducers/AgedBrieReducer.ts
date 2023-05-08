import {RegularReducer} from "@/reducers/RegularReducer";
import {Item} from "@/gildedRose";

export class AgedBrieReducer extends RegularReducer {

  static NAME: string = 'Aged Brie Reducer';

  constructor() {
    super(AgedBrieReducer.NAME);
  }

  updateQuality(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1
      if (item.sellIn < 0) {
        item.quality = item.quality + 1
      }
    }
  }

  updateSellIn(item: Item) {
    item.sellIn = item.sellIn - 1;
  }
}
