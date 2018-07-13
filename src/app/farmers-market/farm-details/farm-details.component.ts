import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { DbService } from '../db.service';
@Component({
  selector: 'app-farm-details',
  template: `
      <ul *ngFor = "let d of data">
      <li *ngIf = "d._id==[rId]">{{d.Farm}}</li>
      </ul>
  `,
})
export class FarmDetailsComponent implements OnInit {
  rId;
  data
  constructor(private route: ActivatedRoute, private service:DbService) {
    this.data = service.getData(); 
    route.params.subscribe(data=>this.rId=data['id'])
  }
  ngOnInit() {
  }

}
