import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private url = 'http://localhost:3000/posts/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  getById(id: string): Observable<Post> {
    return this.http.get<Post>(this.url + id);
  }

  create(post: Post): Observable<Post> {
    return this.http.post<Post>(this.url, { ...post });
  }

  update(post: Post): Observable<Post> {
    return this.http.patch<Post>(this.url + post.id, { ...post });
  }

  delete(id: string) {
    return this.http.delete(this.url + id);
  }
}
