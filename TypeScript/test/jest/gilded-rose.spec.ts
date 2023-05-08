import { Item, GildedRose } from '@/gildedRose';
import {AGED_BRIE, BACKSTAGE, SULFURAS} from "@/itemNames";
import {getReducerForItem} from "@/reducers/reducers";
import {BackstageReducer} from "@/reducers/BackstageReducer";
import {AgedBrieReducer} from "@/reducers/AgedBrieReducer";
import {SulfurasReducer} from "@/reducers/SulfurasReducer";
import {RegularReducer} from "@/reducers/RegularReducer";

describe('Gilded Rose', () => {
  const testDecreasingByTwoWhenSellByDateIsPassed = (itemName: string) => {
    it(`quality should degrade by two for ${itemName} if sell by date has passed`, () => {
      const gildedRose = new GildedRose([new Item(itemName, -1, 8)]);
      let items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-2);
      expect(items[0].quality).toBe(6);
    })
  }
  const testIncreasingInQualityWhenThereIs20DaysToSell = (itemName: string) => {
    it(`should increase in quality the older it gets for ${itemName} when there 20 days to sell`, () => {
      const gildedRose = new GildedRose([new Item(itemName, 20, 1)]);
      let items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(2);
    })
  }
  describe('Reducer By Item Name', () => {
    it('should return Backstage reducer for name with "Backstage passes" in it', ()=>{
      const item = new Item('Backstage passes to some event', 10, 8);
      const reducer = getReducerForItem(item);
      expect(reducer.name).toBe(BackstageReducer.NAME)
    });
    it('should return Backstage reducer for name with "backstage Passes" in it, independent on case', ()=>{
      const item = new Item('backstage Passes to some event', 10, 8);
      const reducer = getReducerForItem(item);
      expect(reducer.name).toBe(BackstageReducer.NAME)
    })
    it('should return AgedBrie reducer for name with "aged brie" in it, independent on case', ()=>{
      const item = new Item('aged Brie from Ukraine', 10, 8);
      const reducer = getReducerForItem(item);
      expect(reducer.name).toBe(AgedBrieReducer.NAME)
    })
    it('should return Sulfuras reducer for name with "sulfuras" in it, independent on case', ()=>{
      const item = new Item('sulfuras of god', 10, 8);
      const reducer = getReducerForItem(item);
      expect(reducer.name).toBe(SulfurasReducer.NAME)
    })
    it('should return Regular reducer for other cases', ()=>{
      const item = new Item('some item', 10, 8);
      const reducer = getReducerForItem(item);
      expect(reducer.name).toBe(RegularReducer.NAME)
    })
  });
  describe('Regular Item', () => {
    it('quality should degrade by one if sell by date has not passed', ()=>{
      const gildedRose = new GildedRose([new Item('regular item', 10, 8)]);
      let items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(7);
    })
    testDecreasingByTwoWhenSellByDateIsPassed('regular item');
    it('quality of an item is never negative', () => {
      const gildedRose = new GildedRose([new Item('regular item', -1, 1)]);
      let items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    })
    it('the quality of an item is never more than 50 after constructing item', () => {
      const gildedRose = new GildedRose([new Item('regular item', 10, 100)]);
      expect(gildedRose.items[0].quality).toBe(50);
    })
  });
  describe('Aged Brie Item' , () => {
    testIncreasingInQualityWhenThereIs20DaysToSell(AGED_BRIE);
    it('should increase in quality the older it gets when there 10 days or less to sell', () => {
      const gildedRose = new GildedRose([new Item(AGED_BRIE, 10, 1)]);
      let items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(2);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(3);
    })
    it('should increase in quality the older it gets when there 5 days or less to sell', () => {
      const gildedRose = new GildedRose([new Item(AGED_BRIE, 5, 1)]);
      let items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(2);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(3);
    })
    it('should increase in quality by 2 after time to sell is passed', () => {
      const gildedRose = new GildedRose([new Item(AGED_BRIE, -1, 1)]);
      let items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(3);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(5);
    })
    it('quality should never be more than 50 when sell in is positive', () =>{
      const gildedRose = new GildedRose([new Item(AGED_BRIE, 1, 50)]);
      let items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    })
  })
  describe('Sulfuras Item', ()=>{
    it('should never has to be sold', () => {
      const gildedRose = new GildedRose([new Item(SULFURAS, 10, 50)]);
      let items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(10);
    })
    it('should never decreases in quality', ()=>{
      const gildedRose = new GildedRose([new Item(SULFURAS, 10, 50)]);
      let items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    })
  })
  describe('Backstage Item', ()=>{
    testIncreasingInQualityWhenThereIs20DaysToSell(BACKSTAGE);
    it('quality increases by 2 when there are only 10 days or less to sell it', ()=> {
      const gildedRose = new GildedRose([new Item(BACKSTAGE, 10, 7)]);
      let items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(9);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(11);
    })
    it('should never be more than 50 when there are only 10 days or less to sell it', () => {
      const gildedRose = new GildedRose([new Item(BACKSTAGE, 10, 49)]);
      let items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    })
    it('quality increases by 3 when there are only 5 days or less to sell it', ()=>{
      const gildedRose = new GildedRose([new Item(BACKSTAGE, 5, 3)]);
      let items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(6);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(9);
    })
    it('should never be more than 50 when there are only 5 days or less to sell it', () => {
      const gildedRose = new GildedRose([new Item(BACKSTAGE, 5, 49)]);
      let items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    })
    it('quality drops to 0 after the concert', ()=>{
      const gildedRose = new GildedRose([new Item(BACKSTAGE, 0, 49)]);
      let items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    })
  })
});
