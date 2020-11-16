import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   private apiurl="http://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) { }

  /*getUsers(){
    return this.http.get('https://reqres.in/api/users');
  }*/
   
 getData(){
    return this.http.get(this.apiurl);
  } 
}
