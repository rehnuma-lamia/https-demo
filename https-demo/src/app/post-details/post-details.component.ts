import { Component, OnInit } from '@angular/core';
import { HttpsService } from '../https.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  constructor(private httpsService: HttpsService) { }

  ngOnInit() {
  }

}
