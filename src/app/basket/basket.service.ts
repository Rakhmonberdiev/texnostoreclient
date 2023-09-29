import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IBasket } from '../shared/models/basket';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseUrl = 'https://localhost:7020/api/'
  private basketSource = new BehaviorSubject<IBasket>(null);
  basket$ = this.basketSource.asObservable();

  constructor(private http: HttpClient) { }


  getBasket(id: string){
    return this.http.get(this.baseUrl+ 'basket?id='+id)
    .pipe(
      map((basket: IBasket)=> {
        this.basketSource.next(basket);
      })
    );
  }

  setBasket(basket:IBasket){
    return this.http.post(this.baseUrl+'basket', basket).subscribe((response: IBasket)=>{
      this.basketSource.next(response)
    }, errror =>{
      console.log(errror)
    });
  }


  getCurrentBasketValue(){
    return this.basketSource.value;
  }
}
