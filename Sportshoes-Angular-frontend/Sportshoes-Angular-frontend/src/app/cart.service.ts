import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  constructor(
    private http: HttpClient
  ){}

  addToCart(shoes: any){
    this.items.push(shoes);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;    
  }

  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }
}
