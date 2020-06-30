
import { NewsDetails } from './components/news-events/news-field/news-field.component';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class SendFormsService {
BaseUrL = 'http://localhost:5000/api/Data';
  url = 'http://localhost:5000/api/Data/Data';
   memberURL = 'http://localhost:5000/api/Data/memberData';
   donateURL = 'http://localhost:5000/api/Data/Donations';



    constructor (private ApiCaller : HttpClient ) { }
  
    sendData(items): Observable<any>{
  
      return this.ApiCaller.post(this.url, items, {
        headers: { 'Content-type': 'application/json;charset=utf-8' }
      });
  
    }
  
    sendMembersData(items): Observable<any>{
  
      return this.ApiCaller.post(this.memberURL, items, {
        headers: { 'Content-type': 'application/json;charset=utf-8' }
      })
  
    }
  
    sendDonationsData(items): Observable<any>{
  
      return this.ApiCaller.post(this.donateURL, items, {
        headers: { 'Content-type': 'application/json;charset=utf-8' }
      })
  
    }

    GetNews() : Observable<NewsDetails[]> {
      return this.ApiCaller.get<NewsDetails[]>(this.BaseUrL);
  
  }

}