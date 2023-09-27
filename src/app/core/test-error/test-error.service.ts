import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
  export class TestErrorService{
    baseUrl = 'https://localhost:7020/api/' 
    constructor(private http: HttpClient) {}

    get404Error(){
        this.http.get(this.baseUrl+'products/-1').subscribe(response=>{
          console.log(response);
        },error=>{
          console.log(error);
        })
      }
      
      get500Error(){
        this.http.get(this.baseUrl+'Buggy/servererror').subscribe(response=>{
          console.log(response);
        },error=>{
          console.log(error);
        })
      }
      get400Error(){
        this.http.get(this.baseUrl+'buggy/badrequest').subscribe(response=>{
          console.log(response);
        },error=>{
          console.log(error);
        })
      }
      get400ValiadtionError(){
        this.http.get(this.baseUrl+'products/asda').subscribe(response=>{
          console.log(response);
        },error=>{
          console.log(error);
        })
      }
  }