import { Component } from '@angular/core';
import { products, IProduct } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
products: Array<IProduct> = products;

constructor(private cs: CartService) {

}

addToCart(val: IProduct) {
  this.cs.addToCart(val);

}



}
