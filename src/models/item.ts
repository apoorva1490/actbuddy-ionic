/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
export class Item {
  category : any
  name : any
  type : any
  level : any []
    //   "name": "Billiards",
    //   "type": "Individual",
    //   "category": "Arcade",
    //   "level": [
    //     {
    //       "lvl1": "CAN MAKE IT AH",
    //       "lvl2": "GOOD AND BETTER BUT NOT BEST.",
    //       "lvl3": "ACCURATE, EXCELLENT, ON POINT"
    //     }
    //   ]
    // };

  constructor(private fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (let f in fields) {
      this[f] = fields[f];
    }
  }

 

}
