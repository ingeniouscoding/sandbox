import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private posts: Post[] = [
    {
      id: '1',
      title: 'Post 1',
      body: 'text 1 text 1 text 1 text 1',
    },
    {
      id: '2',
      title: 'Post 2',
      body: 'text 2 text 2 text 2 text 2',
    },
    {
      id: '3',
      title: 'Post 3',
      body: 'text 3 text 3 text 3 text 3',
    },
  ];

  getPosts(): Observable<Post[]> {
    return of(this.posts);
  }

  addPost(post: Post): Observable<Post> {
    const newPost: Post = {
      ...post,
      id: Math.random().toString().substring(2),
    };
    this.posts = [...this.posts, newPost];
    return of(newPost);
  }
}
