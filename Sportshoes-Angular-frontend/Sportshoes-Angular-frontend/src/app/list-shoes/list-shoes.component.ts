import * as core from '@angular/core';
import { Sportyshoe } from '../sportyshoe';
import { ShoeService } from '../shoe.service';
import { ActivatedRoute } from '@angular/router';
import { CartService} from '../cart.service'

@core.Component({
  selector: 'app-list-shoes',
  templateUrl: './list-shoes.component.html',
  styleUrls: ['./list-shoes.component.css']
})
export class ListShoesComponent implements core.OnInit {
  public sportyshoe:Sportyshoe[];
  constructor( private service: ShoeService,private route:ActivatedRoute,private cartService: CartService) { }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  ngOnInit() {
    this.service.getshoes().subscribe(res=>{
      this.sportyshoe=res;
    });
  }

}
