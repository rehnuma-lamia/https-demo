import {Injectable} from '@angular/core';

@Injectable()
export class Constant {
  private static readonly baseURL = 'https://jsonplaceholder.typicode.com/';
  
  static APIPath = class {
    public static readonly commentsPath = "comments";
  }
 
  static APIURL = class {
    public static readonly postsURL = Constant.baseURL + 'posts';
    public static readonly commentsURL = Constant.baseURL + 'comments';
  };
}