// do not touch Items class!
import {AGED_BRIE, BACKSTAGE, SULFURAS} from "@/itemNames";
import {getReducerForItem} from "@/reducers/reducers";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  // do not touch items property!
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = this.invalidateAnAssignItems(items);
  }

  invalidateAnAssignItems(items: Item[]): Item[] {
    // The Quality of an item is never more than 50
    return items.map(item => {
      if(item.quality <= 50) {
        return item;
      } else {
        console.warn('Item was updated to be 50 max in its quality', item);
        return new Item(item.name, item.sellIn, Math.min(50, item.quality))
      }
    });
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      switch (item.name) {
        case AGED_BRIE:
          this.updateQualityOld(item);
          break;
        case SULFURAS:
          this.updateQualityOld(item);
          break;
        case BACKSTAGE:
          this.updateQualityOld(item);
          break;
        default:
          getReducerForItem(item).reduce(item);
          break;
      }
    }
    return [...this.items];
  }
  updateQualityOld(item: Item) {
    if (item.name != AGED_BRIE && item.name != BACKSTAGE) {
      if (item.quality > 0) {
        if (item.name != SULFURAS) {
          item.quality = item.quality - 1
        }
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1
        if (item.name == BACKSTAGE) {
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
      }
    }
    if (item.name != SULFURAS) {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
      if (item.name != AGED_BRIE) {
        if (item.name != BACKSTAGE) {
          if (item.quality > 0) {
            if (item.name != SULFURAS) {
              item.quality = item.quality - 1
            }
          }
        } else {
          item.quality = item.quality - item.quality
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1
        }
      }
    }
  }
}
