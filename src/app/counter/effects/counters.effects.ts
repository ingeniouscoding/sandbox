import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, of, switchMap } from "rxjs";

import { CounterActions, UpdatedAtActions } from "../actions";

@Injectable()
export class CounterEffects {
  setUpdatedAt$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        CounterActions.decrement,
        CounterActions.increment,
        CounterActions.setCounter
      ),
      switchMap(() =>
        of(UpdatedAtActions.setUpdatedAt({ currentTime: Date.now() }))),
      catchError(() => EMPTY)
    )
  );

  constructor(private actions$: Actions) { }
}
