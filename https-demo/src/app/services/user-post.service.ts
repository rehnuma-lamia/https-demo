import { Injectable } from '@angular/core';
import { HttpsService } from './https.service';
import { Observable } from 'rxjs/observable';
import { Constant } from '../constant';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserPostService {

  constructor(private httpsService: HttpsService) { }
  
  getUserPosts() : Observable<any> {
    return this.httpsService.getItems(Constant.APIURL.postsURL)
  }

  getPostById(postId: string) : Observable<any> {
    if( postId != undefined){
      return this.httpsService.getItem(Constant.APIURL.postsURL + '/' + postId);
    }
   }
   
}
