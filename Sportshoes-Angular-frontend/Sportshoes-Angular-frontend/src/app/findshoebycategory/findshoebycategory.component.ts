import { Component, OnInit } from '@angular/core';
import { Sportyshoe } from '../sportyshoe';
import { ShoeService } from '../shoe.service';

@Component({
  selector: 'app-findshoebycategory',
  templateUrl: './findshoebycategory.component.html',
  styleUrls: ['./findshoebycategory.component.css']
})
export class FindshoebycategoryComponent {
  public category:string;
  public sportyshoe: Sportyshoe[];
  constructor(private service: ShoeService) {
    
   }

   findshoebycategory(){
    this.service.findshoebycategory(this.category).subscribe(data =>{
      this.sportyshoe = data;
    });
  }

}
