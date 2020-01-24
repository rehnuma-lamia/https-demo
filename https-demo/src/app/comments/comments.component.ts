import { Component, OnInit } from '@angular/core';
import { HttpsService } from '../https.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private httpsService: HttpsService) { }

  ngOnInit() {
  }

}
