import { Component, OnInit } from '@angular/core';
import {DbService} from  '../db.service';

@Component({
  selector: 'app-farms',
  template:`
  Farm Name:
    <ul *ngFor = "let d of data">
      <li><a href="/farm/{{d._id}}">{{d.Farm}}</a></li> 
    </ul>
    `,
    styles:[]
  })
export class FarmsComponent implements OnInit {
  data;
  constructor(private myDb:DbService) { }

  ngOnInit() {
    this.data = this.myDb.getData();
  }

}
