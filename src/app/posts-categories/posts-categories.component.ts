import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-categories',
  templateUrl: './posts-categories.component.html',
  styleUrls: ['./posts-categories.component.css']
})
export class PostsCategoriesComponent implements OnInit{
  
  posts: any[];
  private url= 'https://fe-assignment-server.herokuapp.com/api/v1/computer/categories';
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.LBHszzcjG4uVpYR-SpxUUbUEwhz8S8csczNW63L93xM' }
    this.http.get(this.url, { headers })
      .subscribe(response => {
        this.posts = response as any[];
      })
  }

}
