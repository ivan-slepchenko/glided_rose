// import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  describe('regular item', () => {
    it('should degrade twice if sell by date has passed', () => {
      // const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
      // const items = gildedRose.updateQuality();
      // expect(items[0].name).toBe('foo');
    })
    it('quality of an item is never negative', () => {
      //not sure how to test, on each test case?
    })
    it('the quality of an item is never more than 50', () => {

    })
  });
  describe('Aged Brite', () => {
    it('should increase in quality the older it gets', () => {

    })

  })
  describe('Sulfuras', ()=>{
    it('should never has to be sold', () => {

    })
    it('should never decreases in quality', ()=>{

    })
  })
  describe('Backstage passes', ()=>{
    it('should increase in quality the older it gets', () => {

    })
    it('quality increases by 2 when there are only 10 days or less to sell it', ()=> {

    })
    it('quality increases by 3 when there are only 5 days or less to sell it', ()=>{

    })
    it('quality drops to 0 after the concert', ()=>{

    })
  })
});
