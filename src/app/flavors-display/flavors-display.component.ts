import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FlavorsService } from '../services/flavors.service';

@Component({
  selector: 'app-flavors-display',
  templateUrl: './flavors-display.component.html',
  styleUrls: ['./flavors-display.component.css']
})
export class FlavorsDisplayComponent implements OnInit {

  get variant(): any {
    return this.FlavorsService.variant;
  }

  constructor(private FlavorsService : FlavorsService, private CartService : CartService) {

  }

  addToCart(flavor: object): void {
    this.CartService.flavor = flavor;
    flavor = Object.assign(flavor, [this.variant.name]);
    this.CartService.cart.push(flavor);
    console.log(flavor); // TEST --- DELETE LATER
  }

  ngOnInit() {

  }

}
