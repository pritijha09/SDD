import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoreHttpService {
  private apiBaseURL: string = environment.apiBaseURL;
// private apiBaseURL: string = environment.apiBaseURL;
  constructor(public httpClient: HttpClient) { }

    /**
   * HTTP GET Method
   * @param enpoint string
   */

  get(enpoint: string): Observable<any> {
    let headers = new HttpHeaders();
   // headers = headers.set('authorization', environment.authorization)
 return this.httpClient.get(`${this.apiBaseURL}${enpoint}`, {headers: headers});
   }

     /**
   * HTTP POST Method
    * @param enpoint string
  * @param data any
   *
   */
   post(enpoint: string, data: any): Observable<any> {
     //  let headers = new HttpHeaders();
     //  headers = headers.set('authorization', authorization).set('UserID',  '1');
     return this.httpClient.post(`${this.apiBaseURL}${enpoint}`, data);
   }

}
