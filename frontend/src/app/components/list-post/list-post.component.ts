import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Post } from 'src/app/models/post.model';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent {
posts?: Post[] = [];
constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

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

logout(): void {
  this.tokenStorage.signOut();
}
}
//https://localhost:7086/api/Post

//'https://localhost:7086/api/Post'