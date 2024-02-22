import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApicallService {
 journey :any;
 url ="http://localhost:3000/admin"
  userName: any;
  id: any;
  fromSignIn!: boolean;
 constructor(private httpClient: HttpClient) { }

 postApiCall(formData:any){
  return this.httpClient.post(this.url,formData);
 }
 getUserData() {
  return this.httpClient.get(this.url);
 }
}
