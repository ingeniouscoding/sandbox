import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CounterComponent } from './containers/counter/counter.component';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterEffects } from './effects/counters.effects';

import * as fromCounter from '@sandbox/counter/reducers';

@NgModule({
  declarations: [
    CounterComponent,
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    StoreModule.forFeature(fromCounter.counterFeatureKey, fromCounter.reducer),
    EffectsModule.forFeature([CounterEffects]),
  ],
})
export class CounterModule { }
