import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { createEffect } from "@ngrx/effects";
import { catchError, EMPTY, map, mergeMap, switchMap } from "rxjs";

import { PostsService } from '../services/posts.service';
import { PostsActions, PostsApiActions } from "../actions";
import { Post } from "../models/post.model";

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.getAllPosts),
      switchMap(() => this.postService.getPosts().pipe(
        map((posts) => PostsApiActions.loadSuccess({ posts })),
        catchError(() => EMPTY)
      ))
    )
  );

  addPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsApiActions.createPost),
      map((action) => action.post),
      mergeMap((post: Post) => this.postService.addPost(post)
        .pipe(
          map(post => PostsApiActions.createSuccess({ post })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private postService: PostsService
  ) { }
}
