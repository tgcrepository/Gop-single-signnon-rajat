import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  userid:any
  password:any
  URLstring =environment.apiURL
  //  Path='coroebus-beta-api-levels';
open: any;
  
  Path='coroebus-tgc-api-levels'
  URLNewstring="https://www.m2ost.in/Learning_Trivia_API/api/Trivia"
 
  constructor(public Http:HttpClient) { }

  isLoggedIn() : boolean{
    return localStorage.getItem('token') !==null;
  }

  engagamentlog(data:any){
    var tempurl= `${this.URLstring}`+ `/${this.Path}/dashboard/engagement_log`
    return this.Http.post(tempurl,data)
  }

  submitUserLog(data:any){
    var tempurl=`${this.URLNewstring}/SubmitUserLog`
    return this.Http.post(tempurl,data)
   }
}
