import { Component, Input } from '@angular/core';
import { Post } from '@sandbox/posts/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() public post!: Post;
}
