import { Component, OnInit } from '@angular/core';
import { Sportyshoe } from '../sportyshoe';
import { ShoeService } from '../shoe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-removeshoe',
  templateUrl: './removeshoe.component.html',
  styleUrls: ['./removeshoe.component.css']
})
export class RemoveshoeComponent {
  public id:number;
  public sportyshoe:Sportyshoe;

  constructor(private service: ShoeService,private router:Router) {
   }
   deleteshoebyid(){
    this.service.deleteshoebyid(this.id).subscribe(data =>{
      this.sportyshoe = data;
      this.router.navigate(['/getshoes']);
    });
  }

}
