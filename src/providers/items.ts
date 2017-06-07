import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Api } from './api';

import { Item } from '../models/item';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Items {

  data: any;
  filteredItems: any;
  constructor(public http: Http, public api: Api) {
  }

  query(params?: any) {
    return this.api.get('/items', params)
      .map(this.processData);
  }

   load(): any {
    if (this.data) {
      return Observable.of(this.data);
    } else {
      return this.http.get('../assets/data/data.json')
        .map(this.processData);
    }
  }

  add(item: Item) {
  }

  delete(item: Item) {
  }

  getFilteredItems(filtercategory) {
  return this.load().map(data => {
   this.data.sports.forEach((sport: any) => {
      // loop through each timeline group in the day // each level
      if(sport.category.equals(filtercategory))
      {
        if (this.filteredItems.indexOf(sport) < 0)
        {
          this.filteredItems.push(sport);
        }
      }}
      );
 });
}

 processData(data) {
    // just some good 'ol JS fun with objects and arrays
    // build up the data by linking speakers to sessions
    this.data = data.json();

    this.data.categories = [];

    // loop through each day in the schedule // each sport
    this.data.sports.forEach((sport: any) => {
      // loop through each timeline group in the day // each level
      if(sport.category)
      {
        if (this.data.categories.indexOf(sport.category) < 0)
        {
          this.data.categories.push(sport.category);
        }
      }}
      );

    //   sport.level.forEach((level: any) => {
    //     // loop through each session in the timeline group
    //     level.sessions.forEach((session: any) => {
    //       session.speakers = [];
    //       if (session.speakerNames) {
    //         session.speakerNames.forEach((speakerName: any) => {
    //           let speaker = this.data.speakers.find((s: any) => s.name === speakerName);
    //           if (speaker) {
    //             session.speakers.push(speaker);
    //             speaker.sessions = speaker.sessions || [];
    //             speaker.sessions.push(session);
    //           }
    //         });
    //       }

    //       if (session.tracks) {
    //         session.tracks.forEach((track: any) => {
    //           if (this.data.tracks.indexOf(track) < 0) {
    //             this.data.tracks.push(track);
    //           }
    //         });
    //       }
    //     });
    //   });
    // });

    return this.data;
  }



  
}
