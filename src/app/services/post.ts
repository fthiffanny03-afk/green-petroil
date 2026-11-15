import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';

@Service()
export class PostService {
  private http = inject(HttpClient);

  getPosts() {
    return this.http.get<Post[]>('http://localhost:3000/posts');
  }

  getPost(id: string) {
    return this.http.get<Post>('http://localhost:3000/posts/' + id);
  }
}