import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { PostsActions } from '@sandbox/posts/actions';
import * as fromPosts from '@sandbox/posts/reducers';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  public posts$ = this.store.select(fromPosts.selectPosts);

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(PostsActions.getAllPosts());
  }

  onDelete(id: string) {
    this.store.dispatch(PostsActions.deletePost({ id }));
  }
}
