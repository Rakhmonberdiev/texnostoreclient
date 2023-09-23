import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { ShopService } from './shop.service';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/type';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
products: IProduct[];
brands: IBrand[];
types: IType[];
constructor(private shopService: ShopService){}

ngOnInit(): void {
this.getProduct();
this.getBrand();
this.getType();
}
getProduct(){
  this.shopService.getProducts().subscribe(response =>{
    this.products = response.data;
  }, error =>{
    console.log(error);
  });
}
getBrand(){
  this.shopService.getBrands().subscribe(response=>{
    this.brands = response;
  },error=>{
    console.log(error); 
  });
}

getType(){
  this.shopService.getTypes().subscribe(response=>{
    this.types = response;
  },error=>{
    console.log(error); 
  });
}

}
