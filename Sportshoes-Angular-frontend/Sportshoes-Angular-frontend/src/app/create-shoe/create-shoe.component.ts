import { Component, OnInit } from '@angular/core';
import { Sportyshoe } from '../sportyshoe';
import { ShoeService } from '../shoe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-shoe',
  templateUrl: './create-shoe.component.html',
  styleUrls: ['./create-shoe.component.css']
})
export class CreateShoeComponent implements OnInit {
  public sportyshoe:Sportyshoe;

  constructor(private service:ShoeService,private router:Router) {
    this.sportyshoe=new Sportyshoe();
   }

   createshoe(){
     this.service.createshoe(this.sportyshoe).subscribe(res=>{
      this.sportyshoe=new Sportyshoe();
      this.router.navigate(['/getshoes']);
     });
 
   }

  ngOnInit() {
  }

}
