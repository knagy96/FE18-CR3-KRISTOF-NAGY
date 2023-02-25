import { Injectable } from '@angular/core';
import { IProduct } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart : Array<IProduct> = [];
  constructor() { }

  addToCart(obj : IProduct) {
    this.cart.push(obj);
  }

  getCart() {
    return this.cart;
  }
}
