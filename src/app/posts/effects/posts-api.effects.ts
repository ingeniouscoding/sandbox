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
      switchMap(() =>
        this.postService.getAll()
          .pipe(
            map((posts) => PostsApiActions.loadSuccess({ posts })),
            catchError(() => EMPTY)
          )
      )
    )
  );

  loadPostById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.loadPostById),
      switchMap(({ id }) =>
        this.postService.getById(id)
          .pipe(
            map((post) => PostsApiActions.loadSuccess({ posts: [post] })),
            catchError(() => EMPTY)
          )
      )
    )
  );

  createPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.createPost),
      mergeMap(({ post }) =>
        this.postService.create(post)
          .pipe(
            map((post) => PostsApiActions.createSuccess({ post })),
            catchError(() => EMPTY)
          )
      )
    )
  );

  updatePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.updatePost),
      switchMap(({ post }) =>
        this.postService.update(post)
          .pipe(
            map((post) => PostsApiActions.updateSuccess({ post })),
            catchError(() => EMPTY)
          )
      )
    )
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.deletePost),
      mergeMap(({ id }) =>
        this.postService.delete(id)
          .pipe(
            map(() => PostsApiActions.deleteSuccess({ id })),
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
