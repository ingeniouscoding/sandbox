import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '@sandbox/posts/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() public post!: Post;
  @Output() public delete = new EventEmitter<string>();

  onDelete(id: string) {
    this.delete.emit(id);
  }
}
