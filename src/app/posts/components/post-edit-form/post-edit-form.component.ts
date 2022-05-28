import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { PostsActions } from '@sandbox/posts/actions';
import { Post } from '@sandbox/posts/models/post.model';

@Component({
  selector: 'app-post-edit-form',
  templateUrl: './post-edit-form.component.html',
  styleUrls: ['./post-edit-form.component.scss'],
})
export class PostEditFormComponent implements OnInit {
  @Input() public post!: Post;

  public editPost = new FormGroup({
    title: new FormControl(),
    body: new FormControl(),
  });

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.editPost.patchValue({
      title: this.post.title,
      body: this.post.body,
    });
  }

  onSubmit() {
    const newPost: Post = {
      id: this.post.id,
      title: this.editPost.value.title,
      body: this.editPost.value.body,
    };
    this.store.dispatch(PostsActions.updatePost({ post: newPost }));
  }
}
