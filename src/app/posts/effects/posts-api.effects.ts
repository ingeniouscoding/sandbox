import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { createEffect } from "@ngrx/effects";
import { catchError, EMPTY, map, switchMap } from "rxjs";

import { PostsService } from '../services/posts.service';
import { PostsActions, PostsApiActions } from "../actions";

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() =>
    this.actions.pipe(
      ofType(PostsActions.getAllPosts),
      switchMap(() => this.postService.getPosts().pipe(
        map((posts) => PostsApiActions.loadSuccess({ posts })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions: Actions,
    private postService: PostsService
  ) { }
}
