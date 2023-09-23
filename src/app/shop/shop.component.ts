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
brandIdSelected: number;
typeIdSelected: number;
constructor(private shopService: ShopService){}

ngOnInit(): void {
this.getProduct();
this.getBrand();
this.getType();
}
getProduct(){
  this.shopService.getProducts(this.brandIdSelected, this.typeIdSelected).subscribe(response =>{
    this.products = response.data;
  }, error =>{
    console.log(error);
  });
}
getBrand(){
  this.shopService.getBrands().subscribe(response=>{
    this.brands = [{id:0, name: "Все"},... response];
  },error=>{
    console.log(error); 
  });
}

getType(){
  this.shopService.getTypes().subscribe(response=>{
    this.types = [{id:0, name: "Все"},... response];
  },error=>{
    console.log(error); 
  });
}

onBrandSelected(brandId: number){
  this.brandIdSelected = brandId;
  this.getProduct();
}
onTypeSelected(typeId:number){
  this.typeIdSelected = typeId;
  this.getProduct();
}
}
