import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FlavorsService } from '../services/flavors.service';

@Component({
  selector: 'app-cart-display',
  templateUrl: './cart-display.component.html',
  styleUrls: ['./cart-display.component.css']
})
export class CartDisplayComponent implements OnInit {

  cart: any = [];

  get flavor(): any {
    return this.CartService.flavor;
  }
  
  constructor(private CartService : CartService, private FlavorsService : FlavorsService) {
    this.CartService.cart = this.cart;
  }

  removeFromCart(item: any) {
    let index = this.cart.indexOf(item);
    if (index >= 0) {
      this.cart.splice(index, 1);
    }
  }

  ngOnInit(): void {

  }

}
