import { createAction, props } from "@ngrx/store";

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');

export const setCounter = createAction(
  '[Counter] Set counter value',
  props<{ value: number; }>()
);
