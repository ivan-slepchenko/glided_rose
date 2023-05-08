import { Reducer } from "@/reducers/Reducer";
import {Item} from "@/gildedRose";
import {AGED_BRIE, BACKSTAGE, SULFURAS} from "@/itemNames";

export class BackstageReducer extends Reducer {
  constructor() {
    super('Backstage Reducer');
  }

  reduce(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1
      if (item.sellIn < 11) {
        if (item.quality < 50) {
          item.quality = item.quality + 1
        }
      }
      if (item.sellIn < 6) {
        if (item.quality < 50) {
          item.quality = item.quality + 1
        }
      }
    }

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }
}
