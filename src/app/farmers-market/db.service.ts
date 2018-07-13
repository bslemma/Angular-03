import { Injectable } from '@angular/core';

@Injectable()
export class DbService {

  constructor() { }
  getData (){
    return [{_id:1, Farm : 'Natural Prairie',produce:['lettuce','tomato']},
            {_id:2, Farm : 'Private PLC',produce:['banana','orange']}]
  }
}
