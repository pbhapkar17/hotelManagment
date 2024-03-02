import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApicallService {
 
 journey :any;
 url ="http://localhost:3000/"
  userName: any;
  id: any;
  fromSignIn!: boolean;

 constructor(private httpClient: HttpClient) { }

 postApiCall(formData:any,journey:any){
  let url = this.url + journey;
  return this.httpClient.post(url,formData);
 }
 getUserData(journey:any) {
  let url = this.url + journey;
  return this.httpClient.get(url);
 }
 patchApiCall(id: any,data:any,journey:any) {
  let url = this.url +journey+'/'+ id;
  return this.httpClient.patch(url,data);
}
}
