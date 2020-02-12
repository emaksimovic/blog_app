import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterTextComponent } from './enter-text/enter-text.component';
import { PostListComponent } from './post-list/post-list.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterTextComponent,
    PostListComponent,
    AuthorListComponent,
    SinglePostComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
