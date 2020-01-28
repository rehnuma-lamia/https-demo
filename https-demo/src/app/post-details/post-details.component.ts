import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserPostService } from '../services/user-post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  singlePost : Observable<any>;
  constructor(private userPostService:UserPostService) { }

  ngOnInit() {
    this.singlePost = this.userPostService.getPostById("");
  }

}
