import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { products, IProduct } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  implements OnInit{
  product : IProduct = {} as IProduct;
  id: number = 0;
  

  constructor( private route: ActivatedRoute,  private cs: CartService) {}

  addToCart() {
    this.cs.addToCart(this.product);
  }

    ngOnInit() : void {
  this.route.params.subscribe((params : Params) => {
    this.id = +params['id'];
    this.product = products[this.id];
  });

    }

  }


