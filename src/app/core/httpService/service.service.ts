import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseUrl:string = 'http://dummy.restapiexample.com/api/v1';
  constructor(private httpClient:HttpClient) { }

getEmployee(){
  return this.httpClient.get(this.baseUrl + '/employees');
}
}