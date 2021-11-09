import { Component, OnInit } from '@angular/core';
import { FlavorsService } from '../flavors.service';

@Component({
  selector: 'app-flavors-display',
  templateUrl: './flavors-display.component.html',
  styleUrls: ['./flavors-display.component.css']
})
export class FlavorsDisplayComponent implements OnInit {

  get variant(): any {
    return this.FlavorsService.variant;
  }

  constructor(private FlavorsService : FlavorsService) {

  }

  ngOnInit() {

  }

}
