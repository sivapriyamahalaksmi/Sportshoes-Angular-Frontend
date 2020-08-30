import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListShoesComponent } from './list-shoes/list-shoes.component';
import { CreateShoeComponent } from './create-shoe/create-shoe.component';
import { FindshoebyidComponent } from './findshoebyid/findshoebyid.component';
import { RemoveshoeComponent } from './removeshoe/removeshoe.component';
import { FindshoebycategoryComponent } from './findshoebycategory/findshoebycategory.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';


const routes: Routes = [
  {path: 'getshoes',component:ListShoesComponent},
  {path: 'createshoe',component:CreateShoeComponent},
  {path: 'findshoebyid',component:FindshoebyidComponent},
  {path: 'removeshoe',component:RemoveshoeComponent},
  {path: 'findshoebycategory',component:FindshoebycategoryComponent},
  {path: 'cart', component: CartComponent},
  {path: 'shipping', component:ShippingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
