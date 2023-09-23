import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/models/pagination';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/type';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseUrl = 'https://localhost:7020/api/' 
  constructor(private http: HttpClient) {}

  getProducts(){
    return this.http.get<IPagination>(this.baseUrl+'products?pageSize=50')
  }
  getBrands(){
    return this.http.get<IBrand[]>(this.baseUrl+'Products/brands')
  }

  getTypes(){
    return this.http.get<IType[]>(this.baseUrl+'Products/types')
  }
}
