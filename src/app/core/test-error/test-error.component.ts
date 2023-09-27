import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent {
  baseUrl = 'https://localhost:7020/api/' 
  constructor(private http:HttpClient){}

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
