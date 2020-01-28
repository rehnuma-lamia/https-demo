import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Constant } from '../constant';
import { Observable} from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class HttpsService {
  constructor(private httpClient: HttpClient) { }

  getItems(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

  getItem(url: string, params?: HttpParams): Observable<any> {
    return this.httpClient.get(url, {params});
  }

  postItem(url: string, body: any): Observable<any> {
    return this.httpClient.put(url, body);
  }

  deleteItem(url: string, params?: HttpParams): Observable<any> {
    return this.httpClient.delete(url, {params});
  }

  updateItem(url: string, body: any, params?: HttpParams): Observable<any> {
    return this.httpClient.put(url, body, {params});
  }
}
