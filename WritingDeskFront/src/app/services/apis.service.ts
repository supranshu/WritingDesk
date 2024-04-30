import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http:HttpClient) { }


  public login(username:string,password:string){
    return this.http.get(`${baseUrl}/login/${username}/${password}`);
  }

  public signup(user:any){
    return this.http.post(`${baseUrl}/signup`,user);
  }
}
