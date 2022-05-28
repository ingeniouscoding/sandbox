import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, tap, withLatestFrom } from 'rxjs';

import * as fromPosts from '@sandbox/posts/reducers';
import * as fromRouter from '@sandbox/core/router';
import { PostsActions } from '@sandbox/posts/actions';

@Component({
  selector: 'app-post-edit-page',
  templateUrl: './post-edit-page.component.html',
  styleUrls: ['./post-edit-page.component.scss'],
})
export class PostEditPageComponent {
  private id$ = this.store.select(fromRouter.selectRouterParamsId);
  public post$ = this.store.select(fromPosts.selectPostById)
    .pipe(
      withLatestFrom(this.id$),
      tap(([post, id]) => {
        if (!post && id) {
          this.store.dispatch(PostsActions.loadPostById({ id }));
        }
      }),
      map(([post, _]) => post)
    );

  constructor(private store: Store) { }
}
