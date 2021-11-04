import { Component, OnInit } from '@angular/core';
import {VariantsService} from '../variants.service';

@Component({
  selector: 'app-variants-display',
  templateUrl: './variants-display.component.html',
  styleUrls: ['./variants-display.component.css']
})
export class VariantsDisplayComponent implements OnInit {

  data: any = [];

  constructor(private VariantsService:VariantsService) {
    this.VariantsService.getData().subscribe(data=>{
      console.log(data) // TEST --- DELETE LATER
      this.data=data;
    })
  }
  
  ngOnInit(): void {
  }

}
