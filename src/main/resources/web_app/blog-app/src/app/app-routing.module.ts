import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { EnterTextComponent } from './enter-text/enter-text.component';
import { AuthComponent } from './auth/auth.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { CommentComponent } from './comment/comment.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  {
    path: 'posts',
    component: PostListComponent,
    children: [
      { path: '', component: PostsComponent },
      {
        path: 'comment',
        component: CommentComponent
      },
      {
        path: ':id',
        component: SinglePostComponent
      },
      {
        path: ':id/edit',
        component: EnterTextComponent
      }
    ]
  },
  { path: 'post', component: EnterTextComponent },
  { path: 'authors', component: AuthorListComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
