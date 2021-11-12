import { Component, OnInit } from '@angular/core';
import { FlavorsService } from '../services/flavors.service';
import {VariantsService} from '../services/variants.service';

@Component({
  selector: 'app-variants-display',
  templateUrl: './variants-display.component.html',
  styleUrls: ['./variants-display.component.css']
})
export class VariantsDisplayComponent implements OnInit {

  data: any = [];

  constructor(private VariantsService : VariantsService, private FlavorsService : FlavorsService) {
    this.VariantsService.getData().subscribe(data=>{
      console.log(data) // TEST --- DELETE LATER
      this.data=data;
    })
  }

  setSelected(variant: object): void {
    this.FlavorsService.variant = variant;
    console.log(variant); // TEST --- DELETE LATER
  }

  ngOnInit() {
  }

}
