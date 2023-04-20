import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent {
posts?: Post[] = [];
constructor(private http: HttpClient) { }

ngOnInit(): void {
  this.initData();
}

initData(): void {
  this.http.get<Post[]>('https://localhost:7086/api/Post')
  .subscribe({
    next: (data: Post[]) => {
      this.posts = data;
      console.log(this.posts);
    }
  })
}
}
//https://localhost:7086/api/Post

//'https://localhost:7086/api/Post'