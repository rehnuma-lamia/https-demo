import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentService } from './services/comment.service';
import { UserPostService } from './services/user-post.service';
import { HttpsService } from './services/https.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'details', component: PostDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
