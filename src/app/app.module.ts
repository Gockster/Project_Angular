import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { PostsCategoriesComponent } from './posts-categories/posts-categories.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  // {path: 'category/:id', component: PostsComponent},
  // {path: 'products', component: PostsComponent},
 // {path: 'categories', component: PostsCategoriesComponent},
  // {path: '', redirectTo: '/products', pathMatch: 'full'},
  // {path: '**', redirectTo: '/products', pathMatch: 'full'},

];


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    PostsComponent,


  ],
  imports: [
    // RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
   
  ],

  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
