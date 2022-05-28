import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { PostsActions } from '@sandbox/posts/actions';
import { Post } from '@sandbox/posts/models/post.model';

@Component({
  selector: 'app-post-create-page',
  templateUrl: './post-create-page.component.html',
  styleUrls: ['./post-create-page.component.scss'],
})
export class PostCreatePageComponent {
  constructor(private store: Store) { }

  onSubmit(post: Post) {
    this.store.dispatch(PostsActions.createPost({ post }));
  }
}
