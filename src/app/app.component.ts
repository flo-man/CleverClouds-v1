import { Component } from '@angular/core';
import { CartService } from './services/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Clever Cloud (v1)';

  constructor(private CartService : CartService) {}

  getTotal() {
    let total = 0;
    for (var i = 0; i < this.CartService.cart.length; i++) {
      total += this.CartService.cart[i].price;
    }
    return total;
  }
}