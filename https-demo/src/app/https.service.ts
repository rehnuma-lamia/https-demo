import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Constant } from './constant';
import { Observable} from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class HttpsService {
  constructor(private httpClient: HttpClient) { }

  getItems(url: string) : Observable<any> {
    return this.httpClient.get(url);
  }

  getItem(url: string) : Observable<any> {
    return this.httpClient.get(url);
  }

  postItem(url:string, body:any) : Observable<any> {
    return this.httpClient.put(url, body);
  }

  deleteItem(url: string) : Observable<any> {
    return this.httpClient.delete(url);
  }

  updateItem(url:string, body:any) : Observable<any> {
    return this.httpClient.put(url, body);
  }
}
