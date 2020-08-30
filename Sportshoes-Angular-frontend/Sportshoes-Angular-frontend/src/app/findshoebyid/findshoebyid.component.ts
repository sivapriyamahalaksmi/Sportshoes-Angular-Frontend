import { Component, OnInit } from '@angular/core';
import { Sportyshoe } from '../sportyshoe';
import { ShoeService } from '../shoe.service';

@Component({
  selector: 'app-findshoebyid',
  templateUrl: './findshoebyid.component.html',
  styleUrls: ['./findshoebyid.component.css']
})
export class FindshoebyidComponent {
  public id:number;
  public sportyshoe:Sportyshoe;
  constructor(private service: ShoeService) { 
    this.sportyshoe = new Sportyshoe();
  }

  findshoebyid(){
    this.service.findshoebyid(this.id).subscribe(data =>{
      this.sportyshoe = data;
    });
  }

}
