import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterComponent } from './containers/counter/counter.component';
import { CounterRoutingModule } from './counter-routing.module';

@NgModule({
  declarations: [
    CounterComponent,
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
  ],
})
export class CounterModule { }
