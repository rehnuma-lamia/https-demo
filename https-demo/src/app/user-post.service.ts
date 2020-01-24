import { Injectable } from '@angular/core';
import { HttpsService } from './https.service';
import { Observable } from 'rxjs/observable';
import { Constant } from './constant';

@Injectable({
  providedIn: 'root'
})
export class UserPostService {

  constructor(private httpsService: HttpsService) { }

  getUserPosts() : Observable<any> {
    return this.httpsService.getItems(Constant.APIURL.postsURL)
  }
}
