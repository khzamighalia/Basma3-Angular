import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {

   }

  ListProducts( ){

      return this.http.get<any>('http://localhost:8080/products');
    }

}


