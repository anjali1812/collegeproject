import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { user } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private userInfo:string="http://localhost:3000/user/";
  private sign:string="http://localhost:3000/signup/";

  constructor(private _http:HttpClient) { }

  getAllUser(){
    return this._http.get(this.userInfo);
  }

  addUser(item:user){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.sign,body,{headers:head});
  }

  deleteUser(item:user){
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.userInfo+item.email_id,{headers:head});
  }

  updateUser(item:user){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.userInfo+item.email_id,body,{headers:head});
  }

}
