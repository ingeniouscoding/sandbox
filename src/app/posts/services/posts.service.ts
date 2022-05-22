import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private posts: Post[] = [];

  constructor() { }

  getPosts(): Observable<Post[]> {
    return of(this.posts);
  }

  addPost(post: Post) {
    const newPost = {
      ...post,
      id: Math.random().toString().substring(2),
    };
    return of(newPost);
  }
}
