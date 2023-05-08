import {Reducer} from "@/reducers/Reducer";
import {Item} from "@/gildedRose";

export class AgedBrieReducer extends Reducer {
  constructor() {
    super('Aged Brie Reducer');
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
