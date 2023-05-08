import { RegularReducer } from "@/reducers/RegularReducer";
import {Item} from "@/gildedRose";

export class BackstageReducer extends RegularReducer {

  static NAME: string = 'Backstage Reducer';

  constructor() {
    super(BackstageReducer.NAME);
  }

  updateQuality(item: Item) {
    if (item.sellIn > 0) {
      item.quality = item.quality + 1
      if (item.sellIn <= 10) {
        item.quality = item.quality + 1
      }
      if (item.sellIn <= 5) {
        item.quality = item.quality + 1
      }
      item.quality = Math.min(50, item.quality);
    } else {
      item.quality = 0;
    }
  }

  updateSellIn(item: Item) {
    item.sellIn = Math.max(item.sellIn - 1, 0);
  }
}
