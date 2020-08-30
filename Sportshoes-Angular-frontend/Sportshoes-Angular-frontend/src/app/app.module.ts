import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateShoeComponent } from './create-shoe/create-shoe.component';
import { ListShoesComponent } from './list-shoes/list-shoes.component';
import { FindshoebyidComponent } from './findshoebyid/findshoebyid.component';
import { RemoveshoeComponent } from './removeshoe/removeshoe.component';
import { FindshoebycategoryComponent } from './findshoebycategory/findshoebycategory.component';
import { ShoeService } from './shoe.service';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateShoeComponent,
    ListShoesComponent,
    FindshoebyidComponent,
    RemoveshoeComponent,
    FindshoebycategoryComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ShoeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
