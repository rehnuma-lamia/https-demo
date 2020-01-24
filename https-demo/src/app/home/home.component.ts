import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserPostService } from '../user-post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  listOfUserPosts: Observable<any>;

  constructor(private userPostsService: UserPostService) { }

  ngOnInit() {
    this.listOfUserPosts = this.userPostsService.getUserPosts()
  }

}
