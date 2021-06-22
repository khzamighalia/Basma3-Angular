import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit{


  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

    this.ListProd();
    
  }

  ListProd (){
    this.productsService.ListProducts().subscribe(res => console.log(res));
  }
}
