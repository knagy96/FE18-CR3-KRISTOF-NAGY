import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProduct } from '../products';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {
cart : Array<IProduct>= [];

total : number = 0;

service : number = 0;

discount : number = 0;

amount : number = 0;



constructor (private cs:CartService){}

calc() {
 
  for(let val of this.cart) {
      this.total += val.price ;

      this.service = this.total * 0.1 ;

      this.amount = this.total + this.service;

      
      

      if(this.amount > 40) {
        
        this.discount = this.amount * 0.15;
        this.amount = this.amount - this.discount
        alert("You have got 15% discount");
      }
    }



  
    
}

ngOnInit() : void {
  this.cart = this.cs.getCart()
  this.calc();
}

}
