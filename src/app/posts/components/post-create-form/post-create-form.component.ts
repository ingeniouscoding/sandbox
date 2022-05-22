import { Component, EventEmitter, Output } from '@angular/core';

import { Post } from '@sandbox/posts/models/post.model';

@Component({
  selector: 'app-post-create-form',
  templateUrl: './post-create-form.component.html',
  styleUrls: ['./post-create-form.component.scss'],
})
export class PostCreateFormComponent {
  @Output() submitted = new EventEmitter<Post>();

  public post: Post = {
    id: '',
    title: '',
    body: '',
  };

  onSubmit() {
    if (this.post.title !== '' && this.post.body !== '') {
      this.submitted.emit(this.post);
    }
    this.post = {
      id: '',
      title: '',
      body: '',
    };
  }
}
