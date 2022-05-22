import { createAction, props } from "@ngrx/store";
import { Post } from "../models/post.model";

export const loadSuccess = createAction(
  '[Posts] Loading successful',
  props<{ posts: Post[]; }>()
);
export const loadFailure = createAction(
  '[Posts] Loading error',
  props<{ errorMsg: string; }>()
);
