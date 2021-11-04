import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VariantsService {

  constructor(private http:HttpClient) { }

  getData() {
    let url="https://api.clever-cloud.com/v2/products/instances";
    return this.http.get(url);
  }

}
