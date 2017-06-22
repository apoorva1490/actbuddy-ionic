import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];
  filteredItems : any [] = [];
  sportItems: Item[] = [];
  defaultItem: any = {
     "name": "Billiards",
      "type": "Individual",
      "category": "Arcade",
      "level": [
        {
          "lvl1": "CAN MAKE IT AH",
          "lvl2": "GOOD AND BETTER BUT NOT BEST.",
          "lvl3": "ACCURATE, EXCELLENT, ON POINT"
        }
      ]
    };
    
  constructor(public http: Http) {
    let items = [
    {
      "name": "Billiards",
      "type": "Individual",
      "category": "Arcade",
      "level": [
        {
          "lvl1": "CAN MAKE IT AH",
          "lvl2": "GOOD AND BETTER BUT NOT BEST.",
          "lvl3": "ACCURATE, EXCELLENT, ON POINT"
        }
      ]
    },
    {
      "name": "Bowling",
      "type": "Individual",
      "category": "Arcade",
      "level": [
        {
          "lvl1": "CAN MAKE IT AH",
          "lvl2": "GOOD AND BETTER BUT NOT BEST.",
          "lvl3": "ACCURATE, EXCELLENT, ON POINT"
        }
      ]
    },
    {
      "name": "Table Tennis",
      "type": "Individual",
      "category": "Raquet",
      "level": [
        {
          "lvl1": "I CAN WRECK-IT",
          "lvl2": "CAN SMASH, CAN LIAO",
          "lvl3": "ACE"
        }
      ]
    },
    {
      "name": "Gym",
      "type": "Individual",
      "category": "Lifestyle",
      "level": [
        {
          "lvl1": "OFF CENTER",
          "lvl2": "SEMI-STEADY, NOT SO BALANCED",
          "lvl3": "I AM ONE WITH MOVEMENT"
        }
      ]
    },
    {
      "name": "Cycling",
      "type": "Individual",
      "category": "Track",
      "level": [
        {
          "lvl1": "CAN MAKE IT AH",
          "lvl2": "GOOD AND BETTER BUT NOT BEST.",
          "lvl3": "ACCURATE, EXCELLENT, ON POINT"
        }
      ]
    },
    {
      "name": "Walking",
      "type": "Individual",
      "category": "Track",
      "level": [
        {
          "lvl1": "CAN MAKE IT AH",
          "lvl2": "GOOD AND BETTER BUT NOT BEST.",
          "lvl3": "ACCURATE, EXCELLENT, ON POINT"
        }
      ]
    },
    {
      "name": "Pilates",
      "type": "Individual",
      "category": "Lifestyle",
      "level": [
        {
          "lvl1": "OFF CENTER",
          "lvl2": "SEMI-STEADY, NOT SO BALANCED",
          "lvl3": "I AM ONE WITH MOVEMENT"
        }
      ]
    },
    {
      "name": "Ice Skating",
      "type": "Individual",
      "category": "Arcade",
      "level": [
        {
          "lvl1": "CAN MAKE IT AH",
          "lvl2": "GOOD AND BETTER BUT NOT BEST.",
          "lvl3": "ACCURATE, EXCELLENT, ON POINT"
        }
      ]
    },
    {
      "name": "Yoga",
      "type": "Individual",
      "category": "Lifestyle",
      "level": [
        {
          "lvl1": "OFF CENTER",
          "lvl2": "SEMI-STEADY, NOT SO BALANCED",
          "lvl3": "I AM ONE WITH MOVEMENT"
        }
      ]
    },
    {
      "name": "Squash",
      "type": "Individual",
      "category": "Raquet",
      "level": [
        {
          "lvl1": "I CAN WRECK-IT",
          "lvl2": "CAN SMASH, CAN LIAO",
          "lvl3": "ACE"
        }
      ]
    },
    {
      "name": "Tai Chin",
      "type": "Individual",
      "category": "Lifestyle",
      "level": [
        {
          "lvl1": "OFF CENTER",
          "lvl2": "SEMI-STEADY, NOT SO BALANCED",
          "lvl3": "I AM ONE WITH MOVEMENT"
        }
      ]
    },
    {
      "name": "Pool",
      "type": "Individual",
      "category": "Arcade",
      "level": [
        {
          "lvl1": "CAN MAKE IT AH",
          "lvl2": "GOOD AND BETTER BUT NOT BEST.",
          "lvl3": "ACCURATE, EXCELLENT, ON POINT"
        }
      ]
    },
    {
      "name": "Roller Blading",
      "type": "Individual",
      "category": "Track",
      "level": [
        {
          "lvl1": "CAN MAKE IT AH",
          "lvl2": "GOOD AND BETTER BUT NOT BEST.",
          "lvl3": "ACCURATE, EXCELLENT, ON POINT"
        }
      ]
    },
    {
      "name": "Skate Boarding",
      "type": "Individual",
      "category": "Track",
      "level": [
        {
          "id": "1",
          "name": "CAN MAKE IT AH",
          "checked": "false"
        },
        {
          "id":"2",
          "name":"GOOD AND BETTER BUT NOT BEST.",
          "checked":"false"
        },
        { 
          "id": "3",
          "name": "ACCURATE, EXCELLENT, ON POINT",
          "checked":"false"
        }
      ]
    },
    {
      "name": "Dance",
      "type": "Individual",
      "category": "Lifestyle",
      "level": [
        {
          "lvl1": "OFF CENTER",
          "lvl2": "SEMI-STEADY, NOT SO BALANCED",
          "lvl3": "I AM ONE WITH MOVEMENT"
        }
      ]
    },
    {
      "name": "Ballroom Dancing",
      "type": "Individual",
      "category": "Lifestyle",
      "level": [
        {
          "lvl1": "OFF CENTER",
          "lvl2": "SEMI-STEADY, NOT SO BALANCED",
          "lvl3": "I AM ONE WITH MOVEMENT"
        }
      ]
    },
    {
      "name": "Tennis",
      "type": "Individual",
      "category": "Raquet",
      "level": [
        {
          "lvl1": "I CAN WRECK-IT",
          "lvl2": "CAN SMASH, CAN LIAO",
          "lvl3": "ACE"
        }
      ]
    },
    {
      "name": "Badminton",
      "type": "Individual",
      "category": "Raquet",
      "level": [
        {
          "lvl1": "I CAN WRECK-IT",
          "lvl2": "CAN SMASH, CAN LIAO",
          "lvl3": "ACE"
        }
      ]
    },
    {
      "name": "Kick-Boxing",
      "type": "Individual",
      "category": "Lifestyle",
      "level": [
        {
          "lvl1": "OFF CENTER",
          "lvl2": "SEMI-STEADY, NOT SO BALANCED",
          "lvl3": "I AM ONE WITH MOVEMENT"
        }
      ]
    },
    {
      "name": "Parkour",
      "type": "Individual",
      "category": "Lifestyle",
      "level": [
        {
          "lvl1": "OFF CENTER",
          "lvl2": "SEMI-STEADY, NOT SO BALANCED",
          "lvl3": "I AM ONE WITH MOVEMENT"
        }
      ]
    },
    {
      "name": "MMA",
      "type": "Individual",
      "category": "Lifestyle",
      "level": [
        {
          "lvl1": "OFF CENTER",
          "lvl2": "SEMI-STEADY, NOT SO BALANCED",
          "lvl3": "I AM ONE WITH MOVEMENT"
        }
      ]
    },
    {
      "name": "Jogging",
      "type": "Individual",
      "category": "Track",
      "level": [
        {
          "lvl1": "CAN MAKE IT AH",
          "lvl2": "GOOD AND BETTER BUT NOT BEST.",
          "lvl3": "ACCURATE, EXCELLENT, ON POINT"
        }
      ]
    },
    {
      "name": "Darts",
      "type": "Individual",
      "category": "Arcade",
      "level": [
        {
          "lvl1": "CAN MAKE IT AH",
          "lvl2": "GOOD AND BETTER BUT NOT BEST.",
          "lvl3": "ACCURATE, EXCELLENT, ON POINT"
        }
      ]
    }
  // ],
      // {
      //   "name": "Burt Bear",
      //   "profilePic": "assets/img/speakers/bear.jpg",
      //   "about": "Burt is a Bear."
      // },
      // {
      //   "name": "Charlie Cheetah",
      //   "profilePic": "assets/img/speakers/cheetah.jpg",
      //   "about": "Charlie is a Cheetah."
      // },
      // {
      //   "name": "Donald Duck",
      //   "profilePic": "assets/img/speakers/duck.jpg",
      //   "about": "Donald is a Duck."
      // },
      // {
      //   "name": "Eva Eagle",
      //   "profilePic": "assets/img/speakers/eagle.jpg",
      //   "about": "Eva is an Eagle."
      // },
      // {
      //   "name": "Ellie Elephant",
      //   "profilePic": "assets/img/speakers/elephant.jpg",
      //   "about": "Ellie is an Elephant."
      // },
      // {
      //   "name": "Molly Mouse",
      //   "profilePic": "assets/img/speakers/mouse.jpg",
      //   "about": "Molly is a Mouse."
      // },
      // {
      //   "name": "Paul Puppy",
      //   "profilePic": "assets/img/speakers/puppy.jpg",
      //   "about": "Paul is a Puppy."
      // }
    ];

    for (let item of items) {
       this.sportItems.push(new Item(item));
       this.sportItems.sort(function(a: any,b: any){if (a.name < b.name)
                                      return -1;
                                   else if (a.name == b.name)
                                      return 0;
                                   else
                                      return 1;}); 
    }
  }


  querySports(params?: any) {
    if (!params) {
      return this.sportItems;
    }

    return this.sportItems.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  // load() {
  //   if (this.filteredItems) {
  //     return Observable.of(this.filteredItems);
  //     else

  // }
 

  getFilteredItems(filtercategory) {
    this.filteredItems = [];
     console.log('FilterCategory', filtercategory);
     console.log ('Filtered Items', this.filteredItems.length);
  this.items.forEach(sport => {
  // loop through each timeline group in the day // each level
  console.log ('Sport Category', sport.category);
  if(sport.category.toLowerCase() === filtercategory.toLowerCase())
      {
        // if (this.filteredItems.indexOf(sport) < 0)
        // {
          console.log('Item added', sport);
          this.filteredItems.push(sport);
        // }
      }}
      );
  return this.filteredItems;
}
}
