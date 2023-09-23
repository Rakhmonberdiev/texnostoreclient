import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { ShopService } from './shop.service';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/type';
import { ShopParams } from '../shared/models/shopParams';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
@ViewChild('search', {static:true}) searchTerm: ElementRef;
products: IProduct[];
brands: IBrand[];
types: IType[];
totalCount:number;
shopParams = new ShopParams();
sortOptions = [
  {name: 'Алфавитный порядок',value:'name'},
  {name: 'Цена: от низкой до высокой', value: 'priceAsc'},
  {name: 'Цена: от высокой к низкой', value: 'priceDesc'}
]

constructor(private shopService: ShopService){}

ngOnInit(): void {
this.getProduct();
this.getBrand();
this.getType();
}
getProduct(){
  this.shopService.getProducts(this.shopParams).subscribe(response =>{
    this.products = response.data;
    this.shopParams.pageNumber = response.pageIndex;
    this.shopParams.pageSize = response.pageSize;
    this.totalCount = response.count;
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
  this.shopParams.brandId = brandId;
  this.getProduct();
}
onTypeSelected(typeId:number){
  this.shopParams.typeId = typeId;
  this.getProduct();
}

onSortSelected(sort: string){
  this.shopParams.sort = sort;
  this.getProduct();
}
onPageChanged(event:any){
  this.shopParams.pageNumber = event;
  this.getProduct();
}
onSearch(){
  this.shopParams.search = this.searchTerm.nativeElement.value;
  this.getProduct();
}
onReset(){
  this.searchTerm.nativeElement.value = '';
  this.shopParams = new ShopParams();
  this.getProduct();
}
}
