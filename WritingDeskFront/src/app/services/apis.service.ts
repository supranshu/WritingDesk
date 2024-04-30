import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http:HttpClient) { }


  public login(username: string, password: string): Observable<any> {
    return this.http.get(`${baseUrl}/login?username=${username}&password=${password}`);
  }
  

  public signup(user:any){
    return this.http.post(`${baseUrl}/signup`,user);
  }

  public getAllPosts(){
    return this.http.get(`${baseUrl}/all-post`);
  }

  public contactUser(username:any){
    return this.http.get(`${baseUrl}/contact-user/${username}`);

  }

  public getPostByUsername(username:any){
    return this.http.get(`${baseUrl}/user-posts/${username}`);
  }
}
