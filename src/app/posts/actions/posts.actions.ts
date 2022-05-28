import { createAction, props } from "@ngrx/store";

import { Post } from "../models/post.model";

export const getAllPosts = createAction('[Posts] Get all posts');

export const loadPostById = createAction(
  '[Posts] Load post by id',
  props<{ id: string; }>()
);

export const createPost = createAction(
  '[Post] Create post',
  props<{ post: Post; }>()
);

export const updatePost = createAction(
  '[Post] Update post',
  props<{ post: Post; }>()
);

export const deletePost = createAction(
  '[Posts] Delete post',
  props<{ id: string; }>()
);
