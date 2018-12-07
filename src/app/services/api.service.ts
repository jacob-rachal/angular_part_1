import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://www.amiiboapi.com/api';
  //can replace the stuff in ' ' with whatever api we want.

  constructor(private http: HttpClient) { }

  //the GET method, predefined function.
  get(url: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${url}`);
  }//use <any> instead of <HttpClient>

  post(url: string, data: object): Observable<any> {
    return this.http.post(`${this.apiUrl}${url}`, data)
  }
}
