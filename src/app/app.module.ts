import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VariantsDisplayComponent } from './variants-display/variants-display.component';
import { FlavorsDisplayComponent } from './flavors-display/flavors-display.component';
import { CartDisplayComponent } from './cart-display/cart-display.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VariantsDisplayComponent,
    FlavorsDisplayComponent,
    CartDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
