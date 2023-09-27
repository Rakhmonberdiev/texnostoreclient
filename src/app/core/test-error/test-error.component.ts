import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestErrorService } from './test-error.service';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent implements OnInit {
  
  constructor(private errorService: TestErrorService){

  }
  ngOnInit(): void {

  }

  get404(){
    this.errorService.get404Error();
  }
  get400(){
    this.errorService.get400Error();
  }
  get500(){
    this.errorService.get500Error();
  }
  getValiadtionError(){
    this.errorService.get400ValiadtionError();
  }
}
