import {Item} from "@/gildedRose";

export class RegularReducer {

  static NAME: string = 'Regular Reducer';

  name: string;

  constructor(name: string = RegularReducer.NAME) {
    this.name = name;
  }

  reduce(item: Item) {
    this.updateQuality(item);
    this.updateSellIn(item);
  }

  updateQuality(item: Item) {
    item.quality = item.quality - 1;
    if (item.sellIn < 0) {
      item.quality = item.quality - 1
    }
    item.quality = Math.max(0, item.quality);
  }

  updateSellIn(item: Item) {
    item.sellIn = item.sellIn - 1;
  }
}
